// @ts-ignore
@Component({
  selector: 'hello-<%= dasherize(name) %>'
})
// @ts-ignore
export class Hello <%= classify(name) %> <%= addExclamation(name) %> Component {

}