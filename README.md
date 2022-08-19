## 预处理器（loader）

### “webpack”中一切皆模块的思想
Web工程通常会包含HTML、JS、CSS、模板、图片、字体等多种类型的静态资源，且这些资源之间都存在着某种联系。比如，JS文件之间有互相依赖的关系，CSS文件中可能会引用图片和字体等。对于Webpack来说，所有这些静态资源都是模块，我们可以像加载一个JS文件一样去加载它。

如在index.js中加载style.css

```javascript
// index.js
import './style.
```