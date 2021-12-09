/** @format */

// Faking it with sample data.

// sample page slugs
const pages = ["index", "demo"];

// sample page details
const demoPage = {
    head: {
        title: "My demo",
    },
    contentBlockIds: ["demoLayout"],
    contentBlocks: {
        demoLayout: {
            id: "demoLayout",
            type: "page",
            childBlockIds: ["header", "sidebar", "main", "footer"],
        },
        header: {
            id: "header1",
            type: "div",
            childBlockIds: ["logo", "nav"],
        },
        logo: {
            id: "logo",
            type: "image",
            options: {
                src: "/my-pic.jpg",
                alt: "Me",
                height: 120,
                width: 120,
            },
        },
        nav: {
            id: "nav",
            type: "nav",
            options: {}
        },
        sidebar: {
            id: "sidebar",
            type: "div",
            options: {}
        },
        main: {
            id: "main",
            type: "div",
            options: {}
        },
        footer: {
            id: "footer",
            type: "div",
            options: {}
        },
    }
};

// Faking it.
export async function getPages() {
    return pages;
}

export async function getPageBySlug(slug) {
    // only ever return the fake demo page for now.
    return demoPage;
}
