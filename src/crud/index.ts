import { Rule, SchematicContext, Tree, url, mergeWith, template, apply } from '@angular-devkit/schematics';
import { CrudSchematics } from './schema';
import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.

export function crud(_options: CrudSchematics): Rule {
  
  return (tree: Tree, _context: SchematicContext) => {

    const sourceTemplates = url('./files');
    
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      })
    ])

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}

