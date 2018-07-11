import { Directive, TemplateRef, ViewRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUser]'
})
export class UserDirective {
  @Input('appUser') set appUser(condition : boolean){
    if(!condition){
      this.vwref.createEmbeddedView(this.tempref);
    }else{
      this.vwref.clear();
    }
  }
  constructor(private tempref:TemplateRef<any>,private vwref:ViewContainerRef) { }

}
