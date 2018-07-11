import { Directive, ElementRef, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[apphighlighter]'
})
export class HighlightDirective {

    @Input('dbkColor') dbkColor: string;
    @Input('dtxtColor') dtxtColor: string;
    @Input('bkColor') bkColor: string;
    @Input('txtColor') txtColor: string;


    @HostBinding('style.backgroundColor') bgColor: string;
    @HostBinding('style.color') tcolor: string;

    @HostListener('mouseenter') menter() {
        // this.elemref.nativeElement.style.backgroundColor="grey"
        // this.elemref.nativeElement.style.color="white"

       // this.bgColor='grey';
       // this.tcolor='white';
        this.bgColor = this.bkColor;
        this.tcolor = this.txtColor;
    }
    @HostListener('mouseleave') mleave() {
        // this.elemref.nativeElement.style.backgroundColor="transparent"
        // this.elemref.nativeElement.style.color="royalBlue"

        //this.bgColor='transparent';
        // this.tcolor='royalBlue';

        this.bgColor = this.dbkColor;
        this.tcolor = this.dtxtColor;
    }
    constructor(private elemref: ElementRef) {
        //    console.log(this.elemref.nativeElement);
        //      this.elemref.nativeElement.style.backgroundColor="grey"

      
    }
    ngOnInt(){
        this.bgColor = this.dbkColor;
        this.tcolor = this.dtxtColor;
    }
}