import withFlowbiteReact from "flowbite-react/plugin/nextjs";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js configuration options go here
};

export default withFlowbiteReact(withNextIntl(nextConfig));
