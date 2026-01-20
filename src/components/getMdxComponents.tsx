import type {MDXComponents} from 'mdx/types';

import defaultMdxComponents from 'fumadocs-ui/mdx';

import {Step, Steps} from 'fumadocs-ui/components/steps';
import {TypeTable} from 'fumadocs-ui/components/type-table';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,

    Steps,
    Step,
    TypeTable,
  };
}
