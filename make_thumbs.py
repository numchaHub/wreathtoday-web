"""
สร้างรูปขนาด 500px (grid) จากรูปเดิม 1024px
- รูปเดิม: xxx.webp (1024px) → ใช้ใน modal
- รูปใหม่: xxx-sm.webp (500px) → ใช้ใน grid
"""
from PIL import Image
import os
import glob

SRC_DIR = "image"
TARGET_WIDTH = 500
QUALITY = 85

files = glob.glob(os.path.join(SRC_DIR, "*.webp"))
# กรอง -sm ออกเพื่อไม่ทำซ้ำ
files = [f for f in files if not f.endswith("-sm.webp")]

total_before = 0
total_after = 0
count = 0

for src in sorted(files):
    base = os.path.basename(src)
    name = base[:-5]  # remove .webp
    dst = os.path.join(SRC_DIR, f"{name}-sm.webp")

    img = Image.open(src)
    w, h = img.size
    if w <= TARGET_WIDTH:
        print(f"  skip {base} ({w}px already small)")
        continue

    new_h = int(h * TARGET_WIDTH / w)
    thumb = img.resize((TARGET_WIDTH, new_h), Image.LANCZOS)
    thumb.save(dst, "WEBP", quality=QUALITY, method=6)

    sz_before = os.path.getsize(src)
    sz_after = os.path.getsize(dst)
    total_before += sz_before
    total_after += sz_after
    count += 1
    print(f"  {base}: {sz_before/1024:.0f} KB -> {sz_after/1024:.0f} KB ({name}-sm.webp)")

print(f"\n=== สรุป ===")
print(f"ไฟล์: {count} รูป")
print(f"รวมก่อน: {total_before/1024/1024:.2f} MB")
print(f"รวมหลัง: {total_after/1024/1024:.2f} MB")
if total_before > 0:
    print(f"ประหยัด: {(1 - total_after/total_before)*100:.0f}%")
