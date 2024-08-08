import Image from "next/image";
import styles from "./page.module.css";
import {comments} from "@/libs/comments";
import Comment from "@/components/Comment";
import PostOwner from "@/components/PostOwnner";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        <div className="d-flex align-items-center gap-3">
        </div><PostOwner key="post" userImagePath="/profileImages/me.png" username="Kanchai Khumdee 660610739" Text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" like={100}/>
        
        <div>
        {comments.map((x)=><Comment key={x.username} userImagePath={x.userImagePath} username={x.username} commentText={x.commentText} likeNum={x.likeNum} replies={x.replies}/>)}
      </div>
      </div>
    </div>
  );
}
