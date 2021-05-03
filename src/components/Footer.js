import React, {Component} from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div>
                {/* <!-- Footer --> */}
<footer class="footer section  text-gray pt-0">
    <div class="container border-top border-color-light-gray">
        <div class="lg-space"></div>
        <div class="row align-items-center">
            <div class="col-12 col-lg-4 pl-lg-0">
                <ul class="nav md-font-size justify-content-center justify-content-lg-start">
                    
                    <li class="nav-item">
                        <a href="https://www.facebook.com/Schippid-102134812031112/" class="nav-link text-dark-gray pl-lg-0"><i class="fab fa-facebook-square"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="https://twitter.com/SchippidDeliver" class="nav-link text-dark-gray"><i class="fab fa-twitter"></i></a>
                    </li>
                   
                    <li class="nav-item">
                        <a href="https://www.youtube.com/channel/UCj9dTopytVp8UCgJVsBAZ_Q" class="nav-link text-dark-gray pl-lg-0"><i class="fab fa-youtube-square"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.instagram.com/schippid/" class="nav-link text-dark-gray"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="mailto: schippid.deliver@gmail.com" class="nav-link text-dark-gray pl-lg-0"><i class="fab fa-gmail-square"></i></a>
                    </li>
                    
                </ul>
            </div>
            <div class="col-12 col-lg-8 pr-lg-0">
                <div class="credit sm-font-size text-center text-lg-right text-dark-gray">
                    <a class="text-gray" href="https://www.youtube.com/watch?v=sFMRqxCexDk&ab_channel=TheLocalTrain">An ARAV Project</a> | <a href="https://www.youtube.com/watch?v=sFMRqxCexDk&ab_channel=TheLocalTrain" class="text-gray">Moto-Moto Rox</a>.
                </div>
                <div class="copyright  text-gray xs-font-size text-center text-lg-right">
                    &copy; 2021. All Rights Reserved.
                </div>
            </div>
        </div>
    </div>
</footer>
{/* <!--/ End Footer --> */}
            </div>
        )
    }
}

export default Footer