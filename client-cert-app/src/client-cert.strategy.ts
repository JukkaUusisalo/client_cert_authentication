import { PeerCertificate, Strategy } from 'passport-client-cert';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ClientCertStrategy  extends PassportStrategy(Strategy) {
  private whitelistedCns: string[] = ["JukkaStudyClient"];


  async validate(clientCert: PeerCertificate): Promise<any> {
    const cn = clientCert && clientCert.subject && clientCert.subject.CN;
    console.log(cn);
    if (!this.whitelistedCns.includes(cn)) {
      console.error('Unauthorized: Client cert cn : %s is not whitelisted', cn);
      throw new UnauthorizedException();
    }
    console.log(cn, 'Client Authorized');
    return Promise.resolve({user: {name: cn}});
  }
}