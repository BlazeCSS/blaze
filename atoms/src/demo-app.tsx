import { Component } from '@stencil/core';

@Component({
  tag: 'demo-app'
})
export class DemoApp {

  showModal(modal) {
    document.querySelector(modal).show();
  }

  closeModal(modal) {
    document.querySelector(modal).close();
  }

  render() {
    return (
      <div class="o-demo">
        <blaze-tabs type="info">
          <blaze-tab header="Alerts" open>
            <blaze-alert open dismissible>default</blaze-alert>
            <blaze-alert open dismissible type="brand">brand</blaze-alert>
            <blaze-alert open dismissible type="info">info</blaze-alert>
            <blaze-alert open dismissible type="warning">warning</blaze-alert>
            <blaze-alert open dismissible type="success">success</blaze-alert>
            <blaze-alert open type="error">error (also not dismissible)</blaze-alert>
          </blaze-tab>
          <blaze-tab header="Addresses">
            <blaze-address>
              <blaze-address-heading>
                Address header
                  </blaze-address-heading>
              Address line one<br />
              Address line two<br />
              Postcode
                </blaze-address>
          </blaze-tab>
          <blaze-tab header="Avatars">
            <blaze-avatar size="super" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <blaze-avatar size="xlarge" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <blaze-avatar size="large" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <blaze-avatar src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <blaze-avatar size="small" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <blaze-avatar size="xsmall" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <br />
            <blaze-avatar text="GP" size="super"></blaze-avatar>
            <blaze-avatar text="GP" size="xlarge"></blaze-avatar>
            <blaze-avatar text="GP" size="large"></blaze-avatar>
            <blaze-avatar text="GP"></blaze-avatar>
            <blaze-avatar text="GP" size="small"></blaze-avatar>
            <blaze-avatar text="GP" size="xsmall"></blaze-avatar>
            <br />
            <blaze-avatar text="GP" size="super" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <blaze-avatar text="GP" size="xlarge" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <blaze-avatar text="GP" size="large" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <blaze-avatar text="GP" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <blaze-avatar text="GP" size="small" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <blaze-avatar text="GP" size="xsmall" src="https://unsplash.it/200/?image=823"></blaze-avatar>
            <br />
            <blaze-avatar size="super" src="https://unsplash.it/200/?image=823" src2="https://unsplash.it/200/?image=815"></blaze-avatar>
            <blaze-avatar size="xlarge" src="https://unsplash.it/200/?image=823" src2="https://unsplash.it/200/?image=815"></blaze-avatar>
            <blaze-avatar size="large" src="https://unsplash.it/200/?image=823" src2="https://unsplash.it/200/?image=815"></blaze-avatar>
            <blaze-avatar src="https://unsplash.it/200/?image=823" src2="https://unsplash.it/200/?image=815"></blaze-avatar>
            <blaze-avatar size="small" src="https://unsplash.it/200/?image=823" src2="https://unsplash.it/200/?image=815"></blaze-avatar>
            <blaze-avatar size="xsmall" src="https://unsplash.it/200/?image=823" src2="https://unsplash.it/200/?image=815"></blaze-avatar>
          </blaze-tab>

          <blaze-tab header="Toasts">
            <blaze-toasts position="bottomright">
              <blaze-alert open dismissible type="brand">This is a toast</blaze-alert>
              <blaze-alert open dismissible type="info">Just for your information</blaze-alert>
              <blaze-alert open type="warning">You can't get rid of this warning</blaze-alert>
              <blaze-alert open dismissible type="success">Yay things worked</blaze-alert>
              <blaze-alert open dismissible type="error">Argh there is an error</blaze-alert>
            </blaze-toasts>
          </blaze-tab>

          <blaze-tab header="Badges">
            <blaze-badge>default</blaze-badge>
            <blaze-badge type="brand">brand</blaze-badge>
            <blaze-badge type="info">info</blaze-badge>
            <blaze-badge type="warning">warning</blaze-badge>
            <blaze-badge type="success">success</blaze-badge>
            <blaze-badge type="error">error</blaze-badge><br /><br />
            <blaze-badge rounded>default</blaze-badge>
            <blaze-badge rounded type="brand">brand</blaze-badge>
            <blaze-badge rounded type="info">info</blaze-badge>
            <blaze-badge rounded type="warning">warning</blaze-badge>
            <blaze-badge rounded type="success">success</blaze-badge>
            <blaze-badge rounded type="error">error</blaze-badge><br /><br />
            <blaze-badge ghost rounded>default</blaze-badge>
            <blaze-badge ghost rounded type="brand">brand</blaze-badge>
            <blaze-badge ghost rounded type="info">info</blaze-badge>
            <blaze-badge ghost rounded type="warning">warning</blaze-badge>
            <blaze-badge ghost rounded type="success">success</blaze-badge>
            <blaze-badge ghost rounded type="error">error</blaze-badge>
          </blaze-tab>

          <blaze-tab header="Breadcrumbs">
            <blaze-breadcrumbs>
              <blaze-breadcrumb href="/">Home</blaze-breadcrumb>
              <blaze-breadcrumb href="/">Cars</blaze-breadcrumb>
              <blaze-breadcrumb href="/">Electric</blaze-breadcrumb>
              <blaze-breadcrumb href="/">Tesla</blaze-breadcrumb>
              <blaze-breadcrumb>P100d</blaze-breadcrumb>
            </blaze-breadcrumbs>
          </blaze-tab>

          <blaze-tab header="Accordions">
            <blaze-accordion>
              <blaze-accordion-pane open header="Click me">
                This is an expanded accordion
            </blaze-accordion-pane>
              <blaze-accordion-pane header="Click me also">
                To toggle other panes
            </blaze-accordion-pane>
            </blaze-accordion>
          </blaze-tab>

          <blaze-tab header="Images">
            <blaze-image src="https://www.blazeui.com/assets/img/blaze.png"></blaze-image>
            <blaze-image></blaze-image>
            <blaze-image photo="WLUHO9A_xik" width={1024} height={768}></blaze-image>
            <blaze-image user="erondu"></blaze-image>
            <blaze-image user="erondu" width={1024} height={768}></blaze-image>
            <blaze-image user="erondu" width={1024} height={768} filter="plane"></blaze-image>
            <blaze-image user="martinjphoto" width={1024} height={768} filter="mountains" likes></blaze-image>
          </blaze-tab>

          <blaze-tab header="Cards">
            <blaze-card>
              <blaze-image></blaze-image>
              <blaze-card-header>
                <h2 class="c-heading u-xlarge">
                  Heading
                <div class="c-heading__sub">Sub-heading</div>
                </h2>
              </blaze-card-header>
              <blaze-card-body>
                <p class="c-paragraph">
                  Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
              </p>
              </blaze-card-body>
              <blaze-card-footer>
                <div class="c-input-group">
                  <button class="c-button c-button--block c-button--brand">Button</button>
                  <button class="c-button c-button--block c-button--info">Button</button>
                </div>
              </blaze-card-footer>
            </blaze-card>
          </blaze-tab>

          <blaze-tab header="Toggles">
            <blaze-toggle>Default</blaze-toggle>
            <blaze-toggle toggled type="brand">Brand</blaze-toggle>
            <blaze-toggle type="info">Info</blaze-toggle>
            <blaze-toggle toggled type="warning">Warning</blaze-toggle>
            <blaze-toggle type="success">Success</blaze-toggle>
            <blaze-toggle toggled type="error">Error</blaze-toggle>
          </blaze-tab>

          <blaze-tab header="Panels">
            <blaze-panel height={150}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget neque mollis, sodales nulla ut, porta urna. Vivamus
                gravida placerat metus ac malesuada. Donec convallis dolor in ex tristique, luctus tempus dui sollicitudin. Suspendisse
                enim urna, auctor ac viverra eget, venenatis non massa. Nulla magna est, ullamcorper eget feugiat ac, condimentum
                id diam. Cras tempor felis sit amet facilisis sollicitudin. Ut posuere malesuada feugiat. Morbi ex ex, pretium
                sit amet dolor eget, malesuada gravida est. Nullam id malesuada massa, ac facilisis elit. Nullam ut metus sit amet
                nisi finibus mollis. Praesent augue felis, feugiat placerat aliquam ut, ultrices sit amet dolor. Phasellus porta
                ligula nec sapien tempus commodo. Pellentesque hendrerit aliquet ornare. Integer nec tempus quam, vitae bibendum
                lectus. Suspendisse vestibulum pulvinar neque at scelerisque. Suspendisse accumsan dolor vitae nulla commodo, volutpat
                commodo nunc bibendum.
            </p>
              <p>
                Integer ut magna ac velit pharetra molestie. Nullam vestibulum est mattis, posuere augue id, suscipit nulla. Praesent vestibulum
                sapien hendrerit, sodales elit et, eleifend est. Aliquam ornare iaculis diam, commodo iaculis erat consectetur
                a. Quisque ut porta est. Mauris vulputate est eu auctor vestibulum. Vestibulum velit libero, cursus vel viverra
                et, fringilla et est. Donec nibh ipsum, finibus eu urna sed, ullamcorper sollicitudin velit. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis
                in faucibus. Nulla sit amet bibendum nunc, ut iaculis tellus. Aenean ornare velit vel venenatis scelerisque. Ut
                ac elit enim. Nulla nec congue ex. Cras nulla ligula, porttitor non pulvinar fermentum, hendrerit sit amet neque.
            </p>
              <p>
                Etiam pulvinar suscipit metus, at lobortis erat eleifend id. Suspendisse scelerisque sem et orci rhoncus posuere. Vivamus
                faucibus mi et feugiat elementum. Nulla tempor, ligula non ullamcorper condimentum, lorem lorem sagittis tortor,
                at interdum tellus nunc elementum purus. Nulla tincidunt augue nibh. Ut et augue a ex pretium sodales. Pellentesque
                quam neque, tincidunt eu fringilla nec, volutpat eget risus.
            </p>
              <p>
                Fusce sit amet arcu sodales, vestibulum quam vel, lacinia mauris. Mauris ut placerat libero, eu gravida lectus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Ut lacinia felis vel nibh blandit, in vestibulum nisl congue. Integer
                ac dignissim nisi, id vehicula tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. In posuere vitae metus in fermentum.
            </p>
              <p>
                Quisque venenatis ut eros at posuere. Etiam pulvinar, ipsum eu interdum vestibulum, arcu urna dapibus lorem, quis volutpat
                tortor enim sed leo. Donec dapibus lacinia purus. Nullam ac porttitor ligula. Fusce aliquet mauris tortor, id euismod
                neque tempus vel. Fusce luctus ex et volutpat pretium. Nulla varius justo quis aliquam accumsan.
            </p>
            </blaze-panel>
          </blaze-tab>

          <blaze-tab header="Modals">
            <button type="button" onClick={() => this.showModal('#modal-dismissible')} class="c-button c-button--brand">Open dismissible Modal</button>
            <blaze-modal dismissible id="modal-dismissible">
              <blaze-card>
                <blaze-card-header>
                  <h2 class="c-heading u-xlarge">
                    Heading
                <div class="c-heading__sub">Sub-heading</div>
                  </h2>
                </blaze-card-header>
                <blaze-card-body>
                  <p class="c-paragraph">
                    Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
              </p>
                </blaze-card-body>
                <blaze-card-footer>
                  <div class="c-input-group">
                    <button class="c-button c-button--block c-button--brand" onClick={() => this.closeModal('#modal-dismissible')}>Close</button>
                    <button class="c-button c-button--block c-button--info">Button</button>
                  </div>
                </blaze-card-footer>
              </blaze-card>
            </blaze-modal>
          </blaze-tab>

          <blaze-tab header="Drawers">
            <button type="button" onClick={() => this.showModal('#drawer')} class="c-button c-button--brand">Open drawer</button><br /><br />
            <button type="button" onClick={() => this.showModal('#drawer-dismissible')} class="c-button c-button--brand">Open drawer</button>

            <blaze-drawer id="drawer">
              <blaze-card>
                <blaze-card-header>
                  <h2 class="c-heading u-xlarge">
                    Heading
                <div class="c-heading__sub">Sub-heading</div>
                  </h2>
                </blaze-card-header>
                <blaze-card-body>
                  <p class="c-paragraph">
                    Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
              </p>
                </blaze-card-body>
                <blaze-card-footer>
                  <div class="c-input-group">
                    <button class="c-button c-button--block c-button--brand" onClick={() => this.closeModal('#drawer')}>Close</button>
                    <button class="c-button c-button--block c-button--info">Button</button>
                  </div>
                </blaze-card-footer>
              </blaze-card>
            </blaze-drawer>

            <blaze-drawer dismissible position="right" id="drawer-dismissible">
              <blaze-card>
                <blaze-image></blaze-image>
                <blaze-card-header>
                  <h2 class="c-heading u-xlarge">
                    Heading
                <div class="c-heading__sub">Sub-heading</div>
                  </h2>
                </blaze-card-header>
                <blaze-card-body>
                  <p class="c-paragraph">
                    Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
              </p>
                </blaze-card-body>
                <blaze-card-footer>
                  <div class="c-input-group">
                    <button class="c-button c-button--block c-button--brand" onClick={() => this.closeModal('#drawer-dismissible')}>Close</button>
                    <button class="c-button c-button--block c-button--info">Button</button>
                  </div>
                </blaze-card-footer>
              </blaze-card>
            </blaze-drawer>
          </blaze-tab>
          <blaze-tab header="Progress bars">
            <blaze-progress size="xsmall" percentage="10" rounded>10%</blaze-progress><br />
            <blaze-progress size="small" type="brand" percentage="15" >15%</blaze-progress><br />
            <blaze-progress size="medium" type="info" percentage="20" rounded>20%</blaze-progress><br />
            <blaze-progress size="large" type="success" percentage="25">25%</blaze-progress><br />
            <blaze-progress size="xlarge" type="warning" percentage="30" rounded>30%</blaze-progress><br />
            <blaze-progress size="super" type="error" percentage="35">35%</blaze-progress>
          </blaze-tab>
        </blaze-tabs>
      </div>
    );
  }
}
