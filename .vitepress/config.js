import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

// https://vitepress.dev/reference/site-config
export default withMermaid({
    lang: 'zh-CN',
    title: '校园网使用指南',
    description: 'A Site of How to Use Campus Web in GDMU.',
    head: [['link', { rel: 'icon', href: '/logo.svg' }]],
    base: '/',
    cleanUrls: true,
    appearance: true,
    lastUpdated: true,
    vite: {
        server: {
            host: '0.0.0.0',
            port: 8081,
            open: true
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: '校园网', link: '/web/intro/what-is-campus-web' },
            { text: '校园 VPN', link: '/vpn/what-is-campus-vpn' }
        ],
        sidebar: {
            vpn: [
                {
                    text: '校园 VPN',
                    items: [
                        { text: '简介', link: '/vpn/what-is-campus-vpn' },
                        { text: '如何申请', link: '/vpn/how-to-apply' },
                        { text: '使用方法（PC端）', link: '/vpn/use-on-pc' },
                        { text: '使用方法（iOS端、iPadOS端）', link: '/vpn/use-on-ios' },
                        { text: '常见问题', link: '/vpn/faq' }
                    ]
                }
            ]
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/gdmuna/campus-web-guide' }],
        editLink: {
            pattern: 'https://github.com/gdmuna/campus-web-guide'
        }
    },
    // https://emersonbottero.github.io/vitepress-plugin-mermaid
    mermaid: {},
    mermaidPlugin: {
        class: 'mermaid'
    }
});
