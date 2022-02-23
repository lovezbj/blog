import{_ as e,c as n,o as i,a as r}from"./app.ca790fb3.js";const f='{"title":"\u57FA\u4E8E Inversify \u6253\u9020 DI \u4E1A\u52A1\u6846\u67B6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u88C5\u9970\u5668\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165\u7CFB\u7EDF","slug":"\u4F7F\u7528\u88C5\u9970\u5668\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165\u7CFB\u7EDF"},{"level":2,"title":"\u5BF9 IoC \u5BB9\u5668\u7684\u66F4\u8FDB\u4E00\u6B65\u5C01\u88C5","slug":"\u5BF9-ioc-\u5BB9\u5668\u7684\u66F4\u8FDB\u4E00\u6B65\u5C01\u88C5"},{"level":2,"title":"\u4F9D\u8D56\u6CE8\u5165 Token \u4F18\u5316","slug":"\u4F9D\u8D56\u6CE8\u5165-token-\u4F18\u5316"},{"level":2,"title":"\u5C01\u88C5 Provide \u88C5\u9970\u5668","slug":"\u5C01\u88C5-provide-\u88C5\u9970\u5668"},{"level":2,"title":"\u5B9E\u73B0\u6D88\u8D39\u4F9D\u8D56\u5173\u7CFB","slug":"\u5B9E\u73B0\u6D88\u8D39\u4F9D\u8D56\u5173\u7CFB"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"tech/di/inversify.md","lastUpdated":1644831143000}',t={},a=r(`<h1 id="\u57FA\u4E8E-inversify-\u6253\u9020-di-\u4E1A\u52A1\u6846\u67B6" tabindex="-1">\u57FA\u4E8E Inversify \u6253\u9020 DI \u4E1A\u52A1\u6846\u67B6 <a class="header-anchor" href="#\u57FA\u4E8E-inversify-\u6253\u9020-di-\u4E1A\u52A1\u6846\u67B6" aria-hidden="true">#</a></h1><p>\u5728\u524D\u7AEF\u7684\u6BD4\u8F83\u5927\u578B\u7684\u6846\u67B6\u6784\u5EFA\u4E2D\uFF0C\u4F9D\u8D56\u6CE8\u5165\u548C\u63A7\u5236\u53CD\u8F6C\u5DF2\u7ECF\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u8BBE\u8BA1\u539F\u5219\u3002InversifyJS\u662F\u5F53\u524D\u76F8\u5BF9\u6700\u6210\u719F\u7684\u4E00\u4E2A\u524D\u7AEFIoC(Inversion of Control)\u7BA1\u7406\u5E93\u3002</p><h2 id="\u4F7F\u7528\u88C5\u9970\u5668\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165\u7CFB\u7EDF" tabindex="-1">\u4F7F\u7528\u88C5\u9970\u5668\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165\u7CFB\u7EDF <a class="header-anchor" href="#\u4F7F\u7528\u88C5\u9970\u5668\u5B9E\u73B0\u4F9D\u8D56\u6CE8\u5165\u7CFB\u7EDF" aria-hidden="true">#</a></h2><p>\u{1F48D} Decorators to rule them all ! \u5F97\u76CA\u4E8E Java \u7684 \u6CE8\u89E3\u7CFB\u7EDF\uFF08Annotation\uFF09\u7684\u8BBE\u8BA1\uFF0CTypescript \u7ED9\u51FA\u4E86\u7C7B\u4F3C\u7684 Decorator \u65B9\u6CD5\uFF0C\u7528\u4E8E\u5BF9\u7C7B\u3001\u7C7B\u7684\u6784\u9020\u5668\u53C2\u6570\u3001\u5C5E\u6027\u7B49\u7B49\uFF0C\u901A\u8FC7\u88C5\u9970\u5668\u7684\u65B9\u5F0F\uFF0C\u4EE5\u6E05\u6670\u6613\u61C2\uFF0C\u4E14\u4FB5\u5165\u7A0B\u5EA6\u8F83\u4F4E\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E86 DI \u7CFB\u7EDF\u7684\u8981\u6C42\uFF0C\u6211\u4EEC\u7EE7\u7EED\u4F7F\u7528\u9020\u8F66\u4E3A\u4F8B\u770B\u4E00\u4E0B Inversify \u7684\u57FA\u7840 API \u4F7F\u7528\uFF1A</p><div class="language-"><pre><code>import { Container, injectable, inject } from &quot;inversify&quot;;

// \u58F0\u660E V8Engine \u662F\u53EF\u4EE5\u88AB\u4F9D\u8D56\u6CE8\u5165\u6846\u67B6\u8BC6\u522B\u7684
@injectable()
class V8Engine {
    public start() {
      	// ... \u{1F3C1} ...
        return &quot;v8&quot;;
    }
}

@injectable()
class V9Engine {
    public start() {
        // ... \u{1F3C1} ...
        return &quot;v9&quot;;
    }
}

// \u58F0\u660E Car \u7C7B\u662F\u53EF\u4EE5\u88AB\u4F9D\u8D56\u6CE8\u5165\u6846\u67B6\u8BC6\u522B\u7684
@injectable()
class Car implements ICar {
    private engine: V8Engine;
    public constructor(engine: V8Engine) {
        this.engine = engine;
    }
    public start() { return this.engine.start(); };
    public stop() { return this.engine.stop(); };
}

// \u521B\u5EFA\u4E00\u4E2A\u4F9D\u8D56\u6CE8\u5165\u5BB9\u5668
const container = new Container();
// \u8FDB\u884C\u4F9D\u8D56\u7ED1\u5B9A
container.bind&lt;IEngine&gt;(V8Engine).to(V8Engine);
container.bind&lt;IEngine&gt;(V9Engine).to(V9Engine);
container.bind&lt;ICar&gt;(Car).to(Car);

// \u89E3\u6790 Car \u5B9E\u4F8B\uFF0C\u5E76\u5C06 V8Engine \u5B9E\u4F8B\u5316\u540E\u4F20\u5165 Car \u7684\u6784\u9020\u5668\u51FD\u6570\u4E2D\uFF0C\u4F5C\u4E3A\u53C2\u6570\u521D\u59CB\u5316 Car \u5B9E\u4F8B
container.get(Car);
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6574\u4E2A DI \u8FC7\u7A0B\u901A\u8FC7 @injectable() \u5B8C\u6210\u4E86 DI \u6846\u67B6\u7684\u8F7B\u91CF\u4FB5\u5165\uFF0C\u4F7F\u5F97\u7F16\u5199\u53CA\u5176\u5C11\u91CF\u7684\u4EE3\u7801\uFF0C\u5C31\u80FD\u591F\u548C\u6846\u67B6\u4EA7\u751F\u5173\u8054\u3002</p><h2 id="\u5BF9-ioc-\u5BB9\u5668\u7684\u66F4\u8FDB\u4E00\u6B65\u5C01\u88C5" tabindex="-1">\u5BF9 IoC \u5BB9\u5668\u7684\u66F4\u8FDB\u4E00\u6B65\u5C01\u88C5 <a class="header-anchor" href="#\u5BF9-ioc-\u5BB9\u5668\u7684\u66F4\u8FDB\u4E00\u6B65\u5C01\u88C5" aria-hidden="true">#</a></h2><p>\u{1F680} Inversify \u672C\u8EAB\u662F\u4E00\u4E2A\u597D\u6846\u67B6\uFF0C\u4F46\u662F\u5404\u79CD\u82B1\u91CC\u80E1\u54E8\u7684 API \u4F7F\u7528\uFF0C\u4E5F\u7ED9\u4E1A\u52A1\u5C42\u5E26\u6765\u66F4\u9AD8\u7684\u8BA4\u77E5\u6210\u672C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u5DE7\u5999\u5730\u5C01\u88C5\u90E8\u5206\u65B9\u6CD5\uFF0C\u63D0\u4F9B\u7ED9\u4E0A\u5C42\u4F7F\u7528\uFF0C\u4EE5\u964D\u4F4E\u300C\u8BA4\u77E5\u6210\u672C\u300D\u3002Inversify \u8FD8\u662F\u6709\u4E00\u5B9A\u7684\u5B66\u4E60\u6210\u672C\u7684\uFF0C\u5149 API \u5C31\u8D85\u8FC7\u4E86 40+\uFF0C\u76F4\u63A5\u4F7F\u7528\u5BF9\u4E8E\u65B0\u624B\u548C\u5C0F\u767D\u7528\u6237\u975E\u5E38\u4E0D\u53CB\u597D\uFF0C\u4EE5 \u{1F447} \u7684\u6587\u6863\u4E3A\u4F8B\uFF0C\u7406\u89E3 Inversify \u7684\u4F7F\u7528\uFF0C\u81F3\u5C11\u8981\u901A\u8BFB\u4E0B\u9762\u7684\u6587\u7AE0\uFF0C\u5F62\u6210\u7406\u89E3\u3002</p><p>Inversify \u5BF9\u63D0\u4F9B\u4E86\u6BD4\u8F83\u539F\u59CB\u7248\u672C\u7684 IoC \u5BB9\u5668\uFF0C\u5B83\u63D0\u4F9B\u4E86\u6700\u539F\u5B50\u5316\u7684\u529F\u80FD\u3002\u6211\u4EEC\u5176\u5B9E\u53EF\u4EE5\u5BF9\u5B83\u505A\u8FDB\u4E00\u6B65\u5C01\u88C5\uFF0C\u6765\u8BA9\u4F7F\u7528\u8005\u66F4\u597D\u5730\u4F7F\u7528\uFF0C\u800C\u4E0D\u7528\u5173\u5FC3\u5176\u5B9E\u73B0\u7EC6\u8282\u3002 \u8FD9\u91CC\u4E3E\u51E0\u4E2A\u53EF\u884C\u7684\u8BBE\u8BA1\u89C4\u5219\uFF1A</p><ul><li>\u4E1A\u52A1\u4F9D\u8D56\u6CE8\u5165\u6846\u67B6\u4E2D\uFF0C\u53EA\u80FD\u591F\u6790\u51FA\u5BF9\u8C61\u7C7B\u578B\uFF08\u5355\u4E00\u7C7B\u578B\u6790\u51FA\uFF0C\u53EF\u4EE5\u964D\u4F4E\u5927\u91CF\u7684\u7406\u89E3\u6210\u672C\uFF0C\u5176\u5B9E\u5BF9\u8C61\u5C31\u5DF2\u7ECF\u53EF\u4EE5 Cover \u4F4F 99% \u7684\u8BBE\u8BA1\u4E86\uFF0C\u53EF\u4EE5\u675C\u7EDD\u590D\u6742\u7684 API \u4F7F\u7528\u5E26\u6765\u7684\u8BA4\u77E5\u6210\u672C\uFF09</li><li>\u5C06 bind \u7684\u8FC7\u7A0B\uFF0C\u5728\u4E1A\u52A1\u6846\u67B6\u4E2D\u81EA\u52A8\u5316\u6389\uFF0C\u5F00\u53D1\u8005\u4E0D\u7528\u5173\u5FC3 bind \u8FC7\u7A0B</li><li>\u5728 IoC \u5BB9\u5668\u5C42\u63D0\u4F9B get \u8FC7\u7A0B\u4E2D\u7684\u7A33\u5B9A\u6027\u4FDD\u8BC1\uFF0C\u4EE5\u81F3\u4E8E\u89E3\u6790\u51FA\u9519\u7684\u65F6\u5019\u6709 fallback \uFF08\u964D\u7EA7\uFF09\u7684\u65B9\u6848</li><li>\u5728 IoC \u5BB9\u5668\u5C42\u5185\u7F6E\u7EDF\u8BA1 IoC \u6790\u51FA\u7684\u6027\u80FD\u5206\u6790\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5BF9\u9AD8\u6027\u80FD\u64CD\u4F5C\u8FDB\u884C\u9AD8\u9759</li><li>\u5728 IoC \u5BB9\u5668\u5C42\u63D0\u914D\u7F6E\u5F0F\u7684\u65B9\u5F0F\uFF0C\u6765\u5C01\u88C5\u5BF9 Inversify \u7684 API\uFF0C\u8BA9\u4E1A\u52A1\u5C42\u6846\u67B6\u4F7F\u7528\u8005\u6839\u672C\u4E0D\u7528\u5173\u5FC3 Inversify \u5E95\u5C42\u5BB9\u5668\u7684\u5B9E\u73B0</li></ul><div class="language-"><pre><code>...

IoC \u5BB9\u5668\u5728\u4E1A\u52A1\u5C42\u53EF\u4EE5\u505A\u5F88\u591A\u4E8B\u60C5\uFF0C\u6765\u5C4F\u853D\u5E95\u5C42\u7684\u590D\u6742\u5EA6\uFF0C\u5BF9\u4E1A\u52A1\u5F00\u53D1\u63D0\u4F9B\u7B80\u5355\u7684\u89E3\u51B3\u65B9\u6848\u3002\u5BF9\u4E8E\u4F7F\u7528\u8005\u800C\u8A00\uFF0C\u4ED6\u4EEC\u53EA\u9700\u8981\u77E5\u9053\u6709 get \u65B9\u6CD5\u5373\u53EF\u3002
// di-framework.ts
export class DIContainer {
  get&lt;T&gt;(serviceIdentifier: Token): T;
}
export const container = new DIContainer();
</code></pre></div><h2 id="\u4F9D\u8D56\u6CE8\u5165-token-\u4F18\u5316" tabindex="-1">\u4F9D\u8D56\u6CE8\u5165 Token \u4F18\u5316 <a class="header-anchor" href="#\u4F9D\u8D56\u6CE8\u5165-token-\u4F18\u5316" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E1A\u52A1\u6846\u67B6\u6307\u5B9A token \u7684\u8BBE\u8BA1\u89C4\u5219\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7B80\u5316\u4F9D\u8D56\u6CE8\u5165 token \u5E26\u6765\u7684\u8BA4\u77E5\u590D\u6742\u5EA6\uFF0C\u4E3A\u6B64\u6211\u4EEC\u53EF\u4EE5\u505A\u5982\u4E0B\u7684\u89C4\u5219\u9650\u5236\uFF1A</p><ul><li>Token \u4F7F\u7528\u5B57\u7B26\u4E32\u4FDD\u8BC1\u552F\u4E00\u6027\uFF0C\u6BD4\u5982\uFF1Aninja \u4FDD\u8BC1\u662F\u5FCD\u8005\u7C7B\u578B\u7684\u5168\u5C40\u552F\u4E00\u6027</li><li>Token \u53EF\u4EE5\u662F\u5B9E\u73B0\u4E86 toString \u65B9\u6CD5\u7684\u4EFB\u4F55\u5BF9\u8C61\uFF0C\u8BE5\u89C4\u5219\u53EF\u4EE5\u8BA9\u540E\u7EED\u4F9D\u8D56\u6CE8\u5165\u7684\u89E3\u6790 Token \u548C\u540E\u7EED\u9762\u5411\u63A5\u53E3\u7684\u8BBE\u8BA1\u6574\u5408\u5728\u4E00\u8D77</li></ul><div class="language-"><pre><code>// tokens.ts
import { createServiceIdentifier } from &#39;di-framework&#39;;
export const Engine = createServiceIdentifier(&#39;engine&#39;);
export const Tire = createServiceIdentifier(&#39;tire&#39;); // \u8F6E\u80CE
export const Car = createServiceIdentifier(&#39;car&#39;);
</code></pre></div><p>\u540E\u7EED\u6211\u4EEC\u53EF\u4EE5\u8BA9 Engine \u548C Car \u7B49\u901A\u8FC7 createServiceIdentifier \u8FD9\u4E2A Token \u7684\u5DE5\u5382\u51FD\u6570\uFF0C\u52A0\u5DE5\uFF0C\u5B9E\u73B0 toString() \u7684\u65B9\u6CD5\uFF0C\u540C\u65F6\u6709\u53EF\u4EE5\u627F\u5F53\u5177\u5907\u300C\u8BED\u4E49\u300D\u7684\u529F\u80FD\u578B Decorator\uFF0C\u7A0D\u540E\u5728\u6700\u7EC8\u6548\u679C\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u5176\u4F18\u96C5\u5730\u5B9E\u73B0\u65B9\u5F0F\u3002</p><h2 id="\u5C01\u88C5-provide-\u88C5\u9970\u5668" tabindex="-1">\u5C01\u88C5 Provide \u88C5\u9970\u5668 <a class="header-anchor" href="#\u5C01\u88C5-provide-\u88C5\u9970\u5668" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u8FDB\u4E00\u6B65\u6536\u655B\u88C5\u9970\u5668\uFF0C\u6211\u4EEC\u5BF9\u7528\u6237\u63D0\u4F9B @provide \u88C5\u9970\u5668\uFF0C\u7528\u4E8E\u63D0\u4F9B\u7C7B\u6216\u8005\u5BF9\u8C61\u3002</p><div class="language-"><pre><code>// impl.ts
import { Engine, Car, Tire } from &#39;tokens&#39;;
import { IEngine } from &#39;standard-engine-interface&#39;;

// engine.v8.impl.ts
@provide(Engine)
class V8Engine implements IEngine {
  start() {
    // ... \u{1F3C1} V8 ...
  }
}

// engine.v9.impl.ts
@provide(Engine)
class V9Engine implements IEngine {
  start() {
    // ... \u{1F3C1} V9 ...
  }
}
</code></pre></div><p>\u5728\u4E0D\u540C\u7684\u6587\u4EF6\u4E2D\u4F7F\u7528 @provide \u88C5\u9970\u5668\uFF0C\u63D0\u4F9B\u4E0D\u540C\u7684\u7C7B\u6765\u7ED1\u5B9A Engine Token\uFF0C\u5373\u53EF\u4EE5\u5B9E\u73B0\u5BF9\u6C7D\u8F66\u5F15\u64CE\u7684\u65E0\u611F\u77E5\u66FF\u6362\uFF0C\u53EA\u8981\u5B9E\u73B0\u4E86 IEngine \u7684\u5F15\u64CE\u5747\u53EF\u4EE5\u3002</p><h2 id="\u5B9E\u73B0\u6D88\u8D39\u4F9D\u8D56\u5173\u7CFB" tabindex="-1">\u5B9E\u73B0\u6D88\u8D39\u4F9D\u8D56\u5173\u7CFB <a class="header-anchor" href="#\u5B9E\u73B0\u6D88\u8D39\u4F9D\u8D56\u5173\u7CFB" aria-hidden="true">#</a></h2><p>\u5728 MyCar \u7C7B Constructor \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u6CE8\u5165\u5F15\u64CE\u548C\u8F6E\u80CE\uFF1A</p><div class="language-"><pre><code>// car.impl.ts
import { container } from &#39;di-framework&#39;;
import { Engine, Tire, Car } from &#39;tokens&#39;;

// \u76F4\u63A5\u5B9E\u73B0
import &#39;engine.v9.impl&#39;;

@provide(Car)
class MyCar {
  constructor(
    @Engine private engine: IEngine,
    @Tire   private tire: ITire,
  ) {
    // init other parts ...
  }
  drive() {
    this.engine.start();
  }
}

// \u6700\u7EC8\u6211\u4EEC\u53EA\u9700\u8981\u901A\u8FC7 Car Identifier \u6790\u51FA Car \u5B9E\u4F8B\u5373\u53EF
const car = container.get&lt;MyCar&gt;(Car);
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E0A\u8FF0\u8FC7\u7A0B\uFF0C\u5C06\u590D\u6742\u7684 Inversify \u6846\u67B6\u7684\u7528\u6CD5\uFF0C\u51DD\u7EC3\u4E3A\uFF1A</p><div class="language-"><pre><code>createServiceIdentifier \u521B\u5EFA\u4F9D\u8D56\u6CE8\u5165\u7684\u552F\u4E00 Token\uFF0C\u540C\u65F6\u4E5F\u662F\u6784\u9020\u5668\u53C2\u6570\u7684\u88C5\u9970\u5668\uFF08\u4E24\u7528\u5BF9\u8C61\uFF0C\u5177\u5907\u8BED\u4E49\uFF09
@provide(ServiceIdentifier) \u63D0\u4F9B\u4F9D\u8D56\u6CE8\u5165\u7684\u670D\u52A1\uFF0C\u5E76\u81EA\u52A8\u5C06 Token \u548C\u88C5\u9970\u7684\u7C7B\u505A\u7ED1\u5B9A

@ServiceIdentifier \u5177\u5907\u88C5\u9970\u8BED\u4E49\u7684\u6784\u9020\u5668\u53C2\u6570\u7684\u88C5\u9970\u5668\uFF0C\u5728\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u8868\u793A\u4F9D\u8D56\u6CE8\u5165\u5173\u7CFB
container.get \u83B7\u53D6\u4F9D\u8D56\u5206\u6790\uFF0C\u6790\u51FA\u9700\u8981\u7684\u5BF9\u8C61\uFF0C\u5B8C\u6210\u6574\u4E2A DI \u8FC7\u7A0B
</code></pre></div><p>\u4FC3\u4F7F\u4F7F\u7528\u8005\uFF08\u4E1A\u52A1\u5F00\u53D1\u8005\uFF09\u53EA\u9700\u8981\u638C\u63E1 4 \u4E2A API \u5C31\u53EF\u4EE5\u5B8C\u6210\u4E3B\u8981\u7684 DI \u7CFB\u7EDF\u8BBE\u8BA1\uFF0C\u6574\u4F53\u7B80\u5316\u4E86\u4F9D\u8D56\u6CE8\u5165\u7684\u7406\u89E3\u6210\u672C\uFF0C\u540C\u65F6\u517C\u987E DI \u98CE\u683C\u7684\u4F18\u96C5\u6027\u3002\u53EF\u4EE5\u5728\u5B9E\u6218\u8FC7\u7A0B\u4E2D\u901A\u8FC7\u8F83\u4F4E\u7684\u6210\u672C\u5C01\u88C5 Inversify \u5B9E\u73B0\u3002\u5F53\u7136\u5BF9\u4E8E\u672C\u8EAB\u9700\u6C42\u5C31\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u4E5F\u53EF\u4EE5\u624B\u64B8\u4E00\u4E2A\u7B80\u5355\u7248\u672C\u7684 Inversify \u6216\u8005\u4F7F\u7528\u5176\u5B83\u4E1A\u754C\u5F00\u6E90\u7684 DI \u6846\u67B6\u8F85\u52A9\u5B9E\u73B0\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li>\u25CF Inversify \u771F\u7684\u975E\u5E38\u5F3A\u5927\uFF0C\u770B\u9879\u76EE\u8D77\u6E90\u4E8E 2015 \u5E74\uFF0C\u7ECF\u8FC7 5 \u5E74\u591A\u7684\u8FED\u4EE3\uFF0C\u5DF2\u7ECF\u5F62\u6210\u4E86\u4E00\u4E2A\u5F88\u5F3A\u5927\u7684\u4F9D\u8D56\u6CE8\u5165\u5E93\uFF0C\u8DF5\u884C\u7740 IOC \u7684\u601D\u60F3\uFF0C\u4E3B\u6D41\u7684\u5E94\u7528\u7A0B\u5E8F\u67B6\u6784\u57FA\u672C\u4E0A\u80FD\u591F cover \u4F4F\u3002</li><li>\u25CF \u4F7F\u7528 OO \u7684\u7EC4\u7EC7\u65B9\u5F0F\uFF0C\u6765\u5B9E\u73B0\u300C\u94FE\u5F0F\u8C03\u7528\u300D\uFF0C\u5EFA\u7ACB xxSyntax \u7C7B\u6765\u5904\u7406\u8FD8\u662F\u9887\u6709\u610F\u601D\u7684\u3002</li><li>\u25CF OO \u7684\u7ECF\u5178\u601D\u60F3\u5728\u5927\u578B\u9879\u76EE\u91CC\u4F9D\u65E7\u4E0D\u8FC7\u65F6\uFF0C\u8FD1\u671F\u5728\u505A\u6269\u5C55\uFF08SPI\uFF09\u673A\u5236\u7684\u8BBE\u8BA1\uFF0C\u548C\u5916\u90E8\u96C6\u6210\u7684\u65F6\u5019\uFF0C\u4F7F\u7528 Inversify \u786E\u5B9E\u5E2E\u52A9\u81EA\u5DF1\u300C\u5E73\u5730\u8D77\u9AD8\u697C\u300D\uFF0C\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u719F\u6089\u6E90\u4EE3\u7801\u4EE3\u7801\u4E5F\u662F\u53D7\u76CA\u532A\u6D45\uFF0C\u5BF9 IoC \u7684 TS \u5B9E\u73B0\u6709\u4E86\u66F4\u5168\u9762\u7684\u7406\u89E3\u3002</li></ul>`,28),o=[a];function s(c,l,d,p,v,g){return i(),n("div",null,o)}var h=e(t,[["render",s]]);export{f as __pageData,h as default};
