import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  congregation = "Select your Victory Location"
  churches = ['Alabang', 'Antipolo', 'Caloocan', 'Fort', 'Greenhills', 'Katipunan', 'Las Pinas', 'Makati', 'Mandaluyong', 'Metro East', 'Nova', 'Ortigas', 'Paranaque', 'Pasig', 'Pioneer', 'Quezon Ave', 'San Jose del Monte', 'Santa Rosa', 'Taft', 'U-Belt']

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  selectedCongregation() {
    this.route.navigate(['/commitments'])
  }

  confirmCode() {
    
  }


}
