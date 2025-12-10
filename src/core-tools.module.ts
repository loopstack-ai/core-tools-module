import { Module } from '@nestjs/common';
import { CreateValue, SwitchTarget } from './index';
import { CommonModule, LoopCoreModule } from '@loopstack/core';

@Module({
  imports: [CommonModule, LoopCoreModule],
  providers: [
    SwitchTarget,
    CreateValue,
  ],
  exports: [
    SwitchTarget,
    CreateValue,
  ],
})
export class CoreToolsModule {}
