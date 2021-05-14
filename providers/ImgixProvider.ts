/*
 * @bitkidd/adonis-imgix
 *
 * (c) Chirill Ceban <cc@bitkidd.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import ImgixClient from '@imgix/js-core'

export default class ImgixProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {
    this.app.container.singleton('Adonis/Addons/Imgix', () => {
      const config = this.app.container.resolveBinding('Adonis/Core/Config').get('imgix', {})

      return new ImgixClient(config)
    })
  }
}
