const imageInput = document.getElementById("imageInput");
const qualityRange = document.getElementById("qualityRange");
const qualityValue = document.getElementById("qualityValue");
const compressBtn = document.getElementById("compressBtn");
const canvas = document.getElementById("canvas");
const downloadLink = document.getElementById("downloadLink");

qualityRange.addEventListener("input", () => {
  qualityValue.textContent = qualityRange.value;
});

compressBtn.addEventListener("click", () => {
  const file = imageInput.files[0];
  if (!file) {
    alert("Please select an image first.");
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = () => {
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const quality = qualityRange.value / 100;
      const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);

      downloadLink.href = compressedDataUrl;
      downloadLink.download = "compressed-image.jpg";
      downloadLink.style.display = "inline-block";
      downloadLink.textContent = "Download Compressed Image";
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});
