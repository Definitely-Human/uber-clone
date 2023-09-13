import { Module } from '@nestjs/common';
import { PaymentService } from './payments.service';
import { PaymentResolver } from './payments.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  providers: [PaymentService, PaymentResolver],
})
export class PaymentsModule {}
