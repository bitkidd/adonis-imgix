/*
 * @bitkidd/adonis-imgix
 *
 * (c) Chirill Ceban <cc@bitkidd.dev>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Adonis/Addons/Imgix' {
  interface SrcSetOptions {
    widths?: number[]
    widthTolerance?: number
    minWidth?: number
    maxWidth?: number
    disableVariableQuality?: boolean
  }

  export interface ImgixConfig {
    domain: string
    secureURLToken?: string
    useHTTPS?: boolean
    includeLibraryParam?: boolean
  }

  export interface ImgixContract {
    buildURL(path: string, params?: {}): string
    buildSrcSet(path: string, params?: {}, options?: SrcSetOptions): string
  }

  const Imgix: ImgixContract
  export default Imgix
}
