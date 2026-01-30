import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main>
        <h1>안뇽~</h1>
        <p>시작해볼까나~1?.</p>
        <p>commit test</p>
      </main>
      <div>
        <Button variant="outline">
          <Link href="/educators/login">Educator 로그인</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/learners/login">Learner 로그인</Link>
        </Button>
      </div>
    </>
  );
}
