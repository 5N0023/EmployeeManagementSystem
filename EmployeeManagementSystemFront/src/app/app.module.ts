import { NgModule } from '@angular/core';
import { LucideAngularModule, Eye, Pen , Trash } from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({Eye, Pen, Trash})
  ]
})
export class AppModule { }