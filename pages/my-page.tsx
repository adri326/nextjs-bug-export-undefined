import Link from "next/link";

interface Props {
  hello: boolean,
}

const Page = ({hello}: Props) => {
  return (<>
    <div>Did getInitialProps call: {String(hello || false)}</div>
    <Link href="/">Back to home</Link>
  </>);
};

Page.getInitialProps = (): Props => {
  return {
    hello: true,
  };
};

export default Page;

export const getStaticProps = undefined;
