import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DataDrivenComponent } from "./data-driven/data-driven.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";


@NgModule({
    declarations: [AppComponent, DataDrivenComponent, TemplateDrivenComponent],
    // FormsModule = template driven form || ReactiveFormsModule = Data-Driven 
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}