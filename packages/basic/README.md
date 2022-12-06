简体中文 | [English](./README.en-US.md)

# Petals 基本

这个包是前端 UI 开发的基础设施，它含有：

- 为 web 应用而准备的 CSS 基本样式（基于 [normalize.css](https://github.com/necolas/normalize.css) 与 [SUIT CSS base](https://github.com/suitcss/base)）
- CSS 工具类（基于 [SUIT CSS utilities](https://github.com/suitcss/utils)）
- Sass 变量、函数和混入（基于 [Trick](https://github.com/ourai/trick)）

欢迎更加深入地了解 [Petals](https://petals.fxxk.design/)。 ;-)

## 用法

在终端中执行 `npm i -S @petals/basic` 之后，你会看到文件夹中既有 `.css` 文件又有 `.scss`。其中，`.css` 文件是直接拿来用的，`.scss` 文件是供二次开发使用。

为了满足不同场景的使用，将样式文件分为三个版本：

| 版本    | 说明                   |
| ------- | ---------------------- |
| `base`  | 只有基本样式           |
| `utils` | 只有工具类             |
| `all`   | 包含了基本样式和工具类 |

另外，`_helper.scss` 文件中是 Sass 变量、函数和混入。
