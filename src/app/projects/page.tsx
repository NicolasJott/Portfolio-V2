import Image from "next/image";
import Layout from "@/app/components/layout/Layout";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
<Layout title={"Projects"}>
<Container>
    <Image src="/images/under-construction.png" alt="Under Construction" width={500} height={500}/>
</Container>
</Layout>
  );
}
