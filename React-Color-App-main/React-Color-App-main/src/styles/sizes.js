// @media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    up() {},
    down(size) {
      const sizes = {
        xs: "575.98px",
        sm: "767.98px",
        md: "991.98px",
        lg: "1199.98px",
        xl: "1600px",
      };
      return `@media (max-width: ${sizes[size]})`;
    }
  };