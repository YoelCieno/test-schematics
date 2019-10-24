import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { HelloSchematics } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: HelloSchematics): Rule {
  
  return (tree: Tree, _context: SchematicContext) => {
    
    const { name } = _options;
    
    tree.create('hi.js', `console.log('hi, world word ${name}!');`);
    
    return tree;
  };
}
