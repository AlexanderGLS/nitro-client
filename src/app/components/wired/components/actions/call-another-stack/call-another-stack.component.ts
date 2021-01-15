import { Component } from '@angular/core';
import { WiredAction } from './../WiredAction';
import { WiredActionType } from '../WiredActionType';
import { WiredMainComponent } from '../../main/main.component';

@Component({
    templateUrl: './call-another-stack.template.html'
})
export class CallAnotherStackComponent extends WiredAction
{
    public static CODE: number = WiredActionType.CALL_ANOTHER_STACK;

    public get code(): number
    {
        return CallAnotherStackComponent.CODE;
    }

    public get requiresFurni(): number
    {
        return WiredMainComponent._Str_5430;
    }
}
