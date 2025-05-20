import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Sokana Collective Website Revamp Documentation Template",
  tagline: "A redesign of the Sokana Collective webpage",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://discsweb-docs.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs-template/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "disc-sweb", // Usually your GitHub org/user name.
  projectName: "docs-template", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          id: "docs",
          sidebarPath: require.resolve("./sidebars.documentation.ts"),
          routeBasePath: "/",
          editUrl:
            "https://github.com/disc-sweb/docs-template/edit/main/docs/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        blog: false,
        pages: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Discover Program - Develop and Innovate for Social Change",
      logo: {
        alt: "Develop and Innovate for Social Change Logo",
        src: "img/disc-logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
          docsPluginId: "docs",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Documentation",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "DISC Website",
              href: "https://www.discnu.org/",
            },
            {
              label: "GitHub",
              href: "https://github.com/DISC-NU",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/disc_nu/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/DISC-NU",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Develop and Innovate for Social Change. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
