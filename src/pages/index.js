import Head from "next/head";
import { Container, Heading } from "../styles/GlobalComponents";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <Heading>Hello let's get started</Heading>
      </Container>
    </>
  );
}
