import { Module } from '@nestjs/common';
import { CreateValue } from './index';
import { CommonModule, LoopCoreModule } from '@loopstack/core';

@Module({
  imports: [CommonModule, LoopCoreModule],
  providers: [
    CreateValue,
  ],
  exports: [
    CreateValue,
  ],
})
export class CoreToolsModule {}
