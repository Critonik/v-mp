const size = {
    tabletM: '680px',
    laptop: '1200px',
    desktop: '1600px',
    ultra: '1900px',
};

export const numSize = {
    tabletM: 680,
    laptop: 1200,
    desktop: 1600,
    ultra: 1900,
};

export const device = {
    tabletM: `(min-width: ${size.tabletM})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
    ultra: `(min-width: ${size.ultra})`,
};
