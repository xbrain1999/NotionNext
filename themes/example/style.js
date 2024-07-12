/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    /* 底色 */
    .dark body {
      background-color: black;
    }

    /* 调整页头高度和填充 */
    .header {
      height: 60px; /* 根据需要调整高度 */
      padding: 10px 20px; /* 根据需要调整填充 */
    }

    /* 调整标题栏间距和填充 */
    .title-bar {
      margin: 20px 0; /* 根据需要调整间距 */
      padding: 10px 0; /* 根据需要调整填充 */
    }

    /* 调整主内容的间距 */
    #container-wrapper {
      padding: 4px 16px; /* 根据需要调整内部填充 */
    }
  `}</style>
}

export { Style }
