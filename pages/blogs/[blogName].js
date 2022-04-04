import { useRouter } from "next/router";
import React from "react";

const Index = (props) => {
  const router = useRouter();
  return <div> {router.query.blogName}</div>;
};

// This gets called on every request
export async function getServerSideProps(context) {
  const data = { id: "1" };
  return { props: { data } };
}

export default Index;
