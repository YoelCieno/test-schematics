@Component({
  selector: 'crud-<%= dasherize(name) %>'
})

export class Crud <%= classify(name) %> <%= addExclamation(name) %> Component {}