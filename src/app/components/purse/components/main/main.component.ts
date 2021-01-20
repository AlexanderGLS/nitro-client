import { Component, OnInit } from '@angular/core';
import { Nitro } from '../../../../../client/nitro/Nitro';
import { PurseService } from '../../services/purse.service';

@Component({
    selector: 'nitro-purse-main-component',
    templateUrl: './main.template.html'
})
export class PurseMainComponent implements OnInit
{
    constructor(private _purseService: PurseService) 
    {}

    public ngOnInit(): void
    {
        this._purseService.requestUpdate();
    }

    public isVisible(type: number): boolean
    {
        if(this._purseService.visibleCurrencies.indexOf(type) === -1) return false;

        return true;
    }

    public getCurrencyUrl(type: number): string
    {
        const url = Nitro.instance.getConfiguration<string>('currency.asset.icon.url');

        return url.replace('%type%', type.toString());
    }

    public get currencies(): Map<number, number>
    {
        return this._purseService.currencies;
    }

    public get hcDay(): number
    {
        if (!this._purseService.hcSub) return;

        return this._purseService.hcSub.totalSeconds;
    }
    /*

        let loc = Nitro.instance.localization;

        let min: number = 60;

        let hour: number = (60 * min);
        
        let day: number = (24 * hour);

        let month: number = (31 * day);

        let year: number = (365 * day);

        let threshold: number = 3;

        let diff = (this._purseService.hcSub.totalSeconds * min);

        if (diff > (threshold * year))
        { 
            return loc.getValueWithParameter("friendlytime.years.short","amount",Math.round((diff / year)).toString());
        }

        if (diff > (threshold * month))
        { 
            return loc.getValueWithParameter("friendlytime.months.short","amount",Math.round((diff / month)).toString()); 
        }

        if (diff > (threshold * day))
        { 
            return loc.getValueWithParameter("friendlytime.days.short","amount",Math.round((diff / day)).toString()); 
        }

        if (diff > (threshold * hour))
        { 
            return loc.getValueWithParameter("friendlytime.hours.short","amount",Math.round((diff / hour)).toString()); 
        }

        if (diff > (threshold * min))
        { 
            return loc.getValueWithParameter("friendlytime.minutes.short","amount",Math.round((diff / min)).toString());
        }

        return loc.getValueWithParameter("friendlytime.seconds.short","amount",Math.round(diff).toString());
        */
}