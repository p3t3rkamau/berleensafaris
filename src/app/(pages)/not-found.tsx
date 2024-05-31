import { Gutter } from '../_components/Gutter'
import { VerticalPadding } from '../_components/VerticalPadding'

import './index.scss'
export default function NotFound() {
  return (
    <Gutter>
      <VerticalPadding top="none" bottom="large">
        <section className="page_404">
          <div className="containers">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg"></div>

                  <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>

                    <p>the page you are looking for not avaible!</p>

                    <a href="/" className="link_404">
                      Go to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </VerticalPadding>
    </Gutter>
  )
}
