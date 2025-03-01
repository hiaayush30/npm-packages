- npm run build
- npm login
- npm publish
---
- npm link aayush-demo-package-2 `in testing to to test package before publishing` 
- `Note:` change version number (if publishing) and build it after every change in npm package and link again
- npm unlink aayush-demo-package-2
---

**Rollup vs Vite (Short Explanation)**  

- **Rollup**: A JavaScript module bundler focused on optimizing production builds. It creates smaller and tree-shaken bundles but has slower development builds.  
- **Vite**: A modern build tool that uses **ES Modules (ESM) in development** for instant hot module replacement (HMR) and **Rollup for production**. Faster development experience compared to traditional bundlers.  

### **Key Differences**  
| Feature       | Rollup  | Vite  |
|--------------|--------|------|
| **Usage**    | Best for library bundling | Best for frontend development |
| **Build Speed** | Slower in dev, fast in prod | Very fast in dev (ESM) |
| **HMR** | No built-in HMR | Built-in, super fast |
| **Config Complexity** | More manual setup | Simpler, auto-optimized |
| **Output** | Optimized bundle | Dev server + optimized prod build |

**Conclusion**: Use **Rollup** for libraries and optimized bundles, and **Vite** for a smooth development experience with hot reload. 🚀
