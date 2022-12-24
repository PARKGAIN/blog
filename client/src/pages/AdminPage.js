import React from "react";
import { Link } from "react-router-dom";
import AdminData from "../components/AdminData";
import PostWriteBtn from "../components/PostWriteBtn";
function AdminPage() {
  return (
    <div>
      <h4 className="text_center mt-100">관리자 도구</h4>
      <AdminData />
      <button>
        <Link to="/posts/manage">글 관리 사이트로 가기 </Link>
      </button>
      <PostWriteBtn />
    </div>
  );
}

export default AdminPage;