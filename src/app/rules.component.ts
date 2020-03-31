import { Component } from '@angular/core';

import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxFilterBuilderModule } from 'devextreme-angular/ui/filter-builder';
import { DxListModule } from 'devextreme-angular/ui/list';
import { Service } from './rules.service';

const anyOfOperation = {
        name: 'anyof',
        caption: 'Is any of',
        icon: 'check',
        editorTemplate: 'tagBoxTemplate',
        calculateFilterExpression(filterValue: any, field: any) {
            return filterValue && filterValue.length
                && Array.prototype.concat.apply([], filterValue.map(function(value) {
                    return [[field.dataField, '=', value], 'or'];
                })).slice(0, -1);
        }
    };

@Component({
    selector: 'app-rules',
    providers: [Service],
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.css']
})

export class RulesComponent {

    constructor(service: Service) {
        this.fields = service.getFields();
        this.filter = service.getFilter();
        this.categories = service.getCategories();
        this.customOperations = [anyOfOperation];
    }
    filterText: any;
    dataSourceText: any;
    fields: Array<any>;
    customOperations: Array<any>;
    filter: any;
    categories: string[];
    groupOperations: string[] = ['and', 'or'];

    private static formatValue(value, spaces = 0) {
        if (value && Array.isArray(value[0])) {
            const TAB_SIZE = 4;
            spaces = spaces || TAB_SIZE;
            return '[' + RulesComponent.getLineBreak(spaces) + value.map(function(item) {
                return Array.isArray(item[0]) ? RulesComponent.formatValue(item, spaces + TAB_SIZE) : JSON.stringify(item);
            }).join(',' + RulesComponent.getLineBreak(spaces)) + RulesComponent.getLineBreak(spaces - TAB_SIZE) + ']';
        }
        return JSON.stringify(value);
    }

    private static getLineBreak(spaces) {
        return '\r\n' + new Array(spaces + 1).join(' ');
    }

    updateTexts(e) {
        this.filterText = RulesComponent.formatValue(e.component.option('value'));
        this.dataSourceText = RulesComponent.formatValue(e.component.getFilterExpression());
    }
}
