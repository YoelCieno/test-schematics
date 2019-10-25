import { Rule, SchematicContext, Tree, url, mergeWith, template, apply } from '@angular-devkit/schematics';
import { HelloSchematics } from './schema';
import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: HelloSchematics): Rule {
  
  return (tree: Tree, _context: SchematicContext) => {

    const sourceTemplates = url('./files');
    
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        addExclamation
      })
    ])
    
    function addExclamation(value: string): string {
      return value + '!';
    }

    
    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}
