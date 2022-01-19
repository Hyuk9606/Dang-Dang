import Link from "next/link";
import Head from "next/head";

export default function AddQuestions() {
  return <div>
    <Head>
    <title>당당|asdf!</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Link href="/self-practice/interview/check-devices">
      <a><button><h1>선택 완료</h1></button></a>
    </Link>
  </div>
}