@Component({
  selector: 'hello-<%= dasherize(name) %>'
})

export class Hello <%= classify(name) %> <%= addExclamation(name) %> Component {

  
}