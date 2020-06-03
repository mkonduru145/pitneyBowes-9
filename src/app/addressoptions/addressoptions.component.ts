import { Component, OnInit } from "@angular/core";
import { AppdataService } from "../services/appdata.service";

@Component({
  selector: "app-addressoptions",
  templateUrl: "./addressoptions.component.html",
  styleUrls: ["./addressoptions.component.scss"]
})
export class AddressoptionsComponent implements OnInit {
  addressOptions: any = [];

  constructor(private appdataService: AppdataService) {
    this.appdataService.newNaAddresses.subscribe(addresses => {
      if (addresses.length > 1) {
        this.addressOptions = [];
        let i = -1;
        addresses.map(address => {
          address.index = i;
          address.id = `addressOption${i}`;
          this.addressOptions.push(address);
          i++;
        });
        this.addressOptions.shift();
      }
    });
  }

  changeAddress(i) {
    const address = this.addressOptions[i];
    if (address.FirmName) {
      this.appdataService.enteredFirmName.emit(address.FirmName);
    }
    if (address.Name) {
      this.appdataService.enteredName.emit(address.Name);
    }
    this.appdataService.newNaAddressSelected.emit(address);
  }
  ngOnInit() {}
}
