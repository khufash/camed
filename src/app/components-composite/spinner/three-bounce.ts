import { Component, Input, OnDestroy } from "@angular/core";

@Component({
  selector: 'sk-three-bounce',
  templateUrl: './sk-three-bounce.html',
  styleUrls: ['./sk-three-bounce.scss']

})

export class ThreeBounceComponent implements OnDestroy {
  private visible: boolean = true;
  private timeout: any;

  @Input()
  public delay: number = 0;

  @Input()
  public set isRunning(value: boolean) {
    if (!value) {
      this.cancel();
      this.visible = false;
      return;
    }

    if (this.timeout) {
      return;
    }

    this.timeout = setTimeout(() => {
      this.visible = true;
      this.cancel();
    }, this.delay);
  }

  @Input() loading: boolean;

  private cancel(): void {
    clearTimeout(this.timeout);
    this.timeout = undefined;
  }

  ngOnDestroy(): any {
    this.cancel();
  }
}
