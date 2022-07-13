import { tsx, create } from "@dojo/framework/core/vdom";
import Link from "@dojo/framework/routing/Link";

import * as css from "./Header.m.css";

interface HeaderProperties {
  title: string;
}

const factory = create().properties<HeaderProperties>();

export default factory(function Header({ properties }) {
  const { title } = properties();
  return (
    <nav classes={[css.root]}>
      <div class="official-header">
        <div classes={[css.hero]}></div>
      </div>
      <Link to="blog-list" classes={[css.link]}>
        {title}
      </Link>
    </nav>
  );
});
