"use client";

import React, { ComponentProps, useState } from "react";

function ImageUpLoaderPage() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  const handleChangeImage: ComponentProps<"input">["onChange"] = async (e) => {
    const files = e.target.files;
    if (!files) return;
    const formData = new FormData();
    
    // Array.from(files).forEach((file, index) =>
    //   formData.append(`img-${index}`, file)
    // );

    Array.from(files).forEach((file) => formData.append("img", file));

    const response = await fetch("http://localhost:3000/api/images", {
      method: "POST",
      body: formData,
    });
    const imgUrl = await response.json();

    setImgUrls((prev) => [imgUrl, ...prev]);
  };
  return (
    <div>
      <h1 className="text-3xl">이미지 업로더</h1>

      <input type="file" onChange={handleChangeImage} multiple />

      <hr />

      {imgUrls.map((imgUrl) => (
        <img src={imgUrl} key={imgUrl} />
      ))}
    </div>
  );
}

export default ImageUpLoaderPage;
