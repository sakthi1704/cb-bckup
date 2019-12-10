import React,{Component} from 'react';
import {Button, Dimmer, Grid, Image, Label} from "semantic-ui-react";
import * as mobileLens from "../../assets/images/mobile_lens_min.png";
import * as logo from "../../assets/images/logo_white.png";
import * as scoreLens from "../../assets/images/score_lens.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {savingsAndInvestmentsQuestions} from "../../utils/savingsAndInvestmentsSection";
import RadioSelect from "../general/radioSelect";
import {settings} from "../../utils/slickSettings";
import DropdownSelect from "../general/dropdownSelect";
import ButtonRangeWithNoOption from "../general/buttonRangeWithNoOption";
import $ from 'jquery';
import {scrollSmoothToTop} from "../../utils/scrollSmooth";
class Section5 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            activeQuestion:0,
            question1Answered:0,
            question2Answered:0,
            selectedAnswerForQuestion1:{
                shortTermGoals:null,
                mediumTermGoals:null,
                longTermGoals:null,
            },
            selectedAnswerForQuestion2:{
                shortTermGoals: null,
                mediumTermGoals: null,
                longTermGoals: null,
            },
            scoreForQuestion1:{
                shortTermGoals:0,
                mediumTermGoals:0,
                longTermGoals:0,
            },
            scoreForQuestion2:{
                shortTermGoals:0,
                mediumTermGoals:0,
                longTermGoals:0,
            },
            timerCount:0,
        }
        this.questionListRef = React.createRef();
    }

    componentWillMount() {
        if (this.props.sectionAnswers) {
            const [selectedAnswerForQuestion1, selectedAnswerForQuestion2] = this.props.answers;
            const [scoreForQuestion1, scoreForQuestion2] = this.props.sectionScores;
            this.setState({
                selectedAnswerForQuestion1,
                selectedAnswerForQuestion2,
                scoreForQuestion1,
                scoreForQuestion2,
                question1Answered:1,
                question2Answered:1,
                update: true,
            });
        }
    }

    generateDots = (number)=>{
        let noOfDots = "";
        for(var i=0;i<number;i++){
            noOfDots+=".";
        }
        return noOfDots;
    }

    slideNext = () =>{
        this.slider.slickGoTo(this.state.activeQuestion+1);
        this.setState({
            activeQuestion:this.state.activeQuestion+1,
        });
        $(".questions-list").animate({
            scrollTop : 0
        }, 0);
    }

    slidePrev = () =>{
        this.slider.slickGoTo(this.state.activeQuestion-1);
        this.setState({
            activeQuestion:this.state.activeQuestion-1,
        });
        $(".questions-list").animate({
            scrollTop : 0
        }, 0);

    }

    handleSelectAnswerForQuestion1 = (term,value,score)=>{
        let shortTermGoals = this.state.selectedAnswerForQuestion1.shortTermGoals;
        let mediumTermGoals = this.state.selectedAnswerForQuestion1.mediumTermGoals;
        let longTermGoals = this.state.selectedAnswerForQuestion1.longTermGoals;
        let scoreForQuestion1 = this.state.scoreForQuestion1;
        if(term === "short_term"){
            shortTermGoals = value;
            scoreForQuestion1.shortTermGoals = score;
        }
        if(term === "medium_term"){
            mediumTermGoals = value;
            scoreForQuestion1.mediumTermGoals = score;
        }
        if(term === "long_term"){
            longTermGoals = value;
            scoreForQuestion1.longTermGoals = score;
        }
        let question1Answered = 0;
        if(shortTermGoals && mediumTermGoals && longTermGoals){
            question1Answered = 1;
            scrollSmoothToTop(250,this.questionListRef.current);
        }
        this.setState({
            selectedAnswerForQuestion1:{
                shortTermGoals:shortTermGoals,
                mediumTermGoals:mediumTermGoals,
                longTermGoals:longTermGoals
            },
            question1Answered:question1Answered,
            question2Answered:this.checkQuestion2Answered(),
            scoreForQuestion1:scoreForQuestion1,
        });
    }

    checkQuestion2Answered = () =>{
        let shortTermGoals = this.state.selectedAnswerForQuestion2.shortTermGoals;
        let mediumTermGoals = this.state.selectedAnswerForQuestion2.mediumTermGoals;
        let longTermGoals = this.state.selectedAnswerForQuestion2.longTermGoals;
        let scoreForQuestion1 = this.state.scoreForQuestion1;
        let question2Answered = 1;
        if(scoreForQuestion1.shortTermGoals >=0 && shortTermGoals=== null){
            question2Answered = 0;
        }
        if(scoreForQuestion1.mediumTermGoals >=0 && mediumTermGoals=== null){
            question2Answered = 0;
        }
        if(scoreForQuestion1.longTermGoals >=0 && longTermGoals=== null){
            question2Answered = 0;
        }
        return question2Answered;
    }
    handleSelectAnswerForQuestion2 = (term,value,score)=>{
        let shortTermGoals = this.state.selectedAnswerForQuestion2.shortTermGoals;
        let mediumTermGoals = this.state.selectedAnswerForQuestion2.mediumTermGoals;
        let longTermGoals = this.state.selectedAnswerForQuestion2.longTermGoals;
        let scoreForQuestion2 = this.state.scoreForQuestion2;
        let scoreForQuestion1 = this.state.scoreForQuestion1;
        if(term === "short_term"){
            shortTermGoals = value;
            scoreForQuestion2.shortTermGoals = score;
        }
        if(term === "medium_term"){
            mediumTermGoals = value;
            scoreForQuestion2.mediumTermGoals = score;
        }
        if(term === "long_term"){
            longTermGoals = value;
            scoreForQuestion2.longTermGoals = score;
        }
        let question2Answered = 1;
        if(scoreForQuestion1.shortTermGoals >=0 && shortTermGoals=== null){
            question2Answered = 0;
        }
        if(scoreForQuestion1.mediumTermGoals >=0 && mediumTermGoals=== null){
            question2Answered = 0;
        }
        if(scoreForQuestion1.longTermGoals >=0 && longTermGoals=== null){
            question2Answered = 0;
        }
        if(question2Answered === 1){
            scrollSmoothToTop(250,this.questionListRef.current);
        }
        this.setState({
            selectedAnswerForQuestion2:{
                shortTermGoals:shortTermGoals,
                mediumTermGoals:mediumTermGoals,
                longTermGoals:longTermGoals
            },
            scoreForQuestion2:scoreForQuestion2,
            question2Answered:question2Answered,
        });
    }

    showQuestion2 = () =>{
        if((this.state.selectedAnswerForQuestion1.shortTermGoals &&
            this.state.selectedAnswerForQuestion1.mediumTermGoals &&
            this.state.selectedAnswerForQuestion1.longTermGoals)&&
            (this.state.selectedAnswerForQuestion1.shortTermGoals !== savingsAndInvestmentsQuestions[0].shortTermNa.value||
                this.state.selectedAnswerForQuestion1.mediumTermGoals !==savingsAndInvestmentsQuestions[0].mediumTermNa.value||
                this.state.selectedAnswerForQuestion1.longTermGoals !==savingsAndInvestmentsQuestions[0].longTermNa.value)){
            return true;
        }
        else{
            return false;
        }
    }


    handleSectionSubmit = ()=>{
        this.setState({loader:true});
        let answerIds = [];
        let answers = [];
        let scores = [];
        let selectedAnswerForQuestion1 = this.state.selectedAnswerForQuestion1;
        let selectedAnswerForQuestion2 = this.state.selectedAnswerForQuestion2;
        let scoreForQuestion1 = this.state.scoreForQuestion1;
        let scoreForQuestion2 = this.state.scoreForQuestion2;
        answers.push(selectedAnswerForQuestion1);
        answers.push(selectedAnswerForQuestion2);
        scores.push(this.state.scoreForQuestion1);
        scores.push(this.state.scoreForQuestion2);
        answerIds.push(selectedAnswerForQuestion1.shortTermGoals);
        answerIds.push(selectedAnswerForQuestion1.mediumTermGoals);
        answerIds.push(selectedAnswerForQuestion1.longTermGoals);
        answerIds.push(selectedAnswerForQuestion2.shortTermGoals);
        answerIds.push(selectedAnswerForQuestion2.mediumTermGoals);
        answerIds.push(selectedAnswerForQuestion2.longTermGoals);
        let filteredAnswerIds = answerIds.filter(function (el) {
            return el != null;
        });
        let scoreArray = [];
        scoreArray.push(scoreForQuestion1.shortTermGoals);
        scoreArray.push(scoreForQuestion1.mediumTermGoals);
        scoreArray.push(scoreForQuestion1.longTermGoals);
        if(scoreForQuestion1.shortTermGoals >= 0){
            scoreArray.push(scoreForQuestion2.shortTermGoals);
        }
        if(scoreForQuestion1.mediumTermGoals >=0){
            scoreArray.push(scoreForQuestion2.mediumTermGoals);
        }
        if(scoreForQuestion1.longTermGoals >=0){
            scoreArray.push(scoreForQuestion2.longTermGoals);
        }
        let totalScore = 0;
        for(var i in scoreArray){
            totalScore+=scoreArray[i];
        }
        totalScore = (totalScore/(scoreArray.length*10))*100;
        this.props.handleSubmit(filteredAnswerIds,totalScore,scores,answers);
        let countdown = setInterval(()=>{
            this.setState({timerCount:this.state.timerCount+1});
            if(this.state.timerCount > 3){
                clearInterval(countdown);
                this.props.setActiveTab(6);
                this.setState({
                    loader:false
                });
            }
        },1000);
    }
    render() {
        let noOfQuestionsAnswered = this.state.question1Answered+this.state.question2Answered;
        return (
            <Grid className="section-main-div">
                <div className="logo-div">
                    <Image src={logo}/>
                </div>
                <Dimmer active={this.state.loader}>
                    <div className="score-div">
                        <div className="content">
                            <div className="section-name">
                                Savings & investments score
                            </div>
                            <div className="your-score">{Math.round(this.props.sectionScore)}<span className="base-score">/100</span></div>
                        </div>
                        <div className="image-div">
                            <Image src={scoreLens}/>
                        </div>
                        <div className="timer">Your next section is loading{this.generateDots(this.state.timerCount)}</div>
                    </div>
                </Dimmer>
                <div className="lens">
                    <Image src={mobileLens} onLoad={()=>{this.setState({loader:false})}}/>
                </div>
                <div  className="questions-list section5-top"  ref={this.questionListRef}>
                    <div className="progress-div">
                        <Label size="medium" className="progress-label">
                            5.Savings & investments
                        </Label>
                        <span className="no-of-questions-answered">(Answered {noOfQuestionsAnswered}/2)</span>
                    </div>
                    <div className="slider-div" ref={this.slideDivRef}>
                        <Slider {...settings} ref={slider => (this.slider = slider)}>
                            <div className={"question-item"} ref={this.question1Ref} id="question-1">
                                <div className="question short">
                                    <span>1.</span><span>{savingsAndInvestmentsQuestions[0].question}</span>
                                </div>
                                <div className="answer">
                                    <ButtonRangeWithNoOption shortTermGoalOptions={savingsAndInvestmentsQuestions[0].shortTermGoalOptions}
                                                             mediumTermGoalOptions={savingsAndInvestmentsQuestions[0].mediumTermGoalOptions}
                                                             longTermGoalOptions={savingsAndInvestmentsQuestions[0].longTermGoalOptions}
                                                             shortTermNa={savingsAndInvestmentsQuestions[0].shortTermNa}
                                                             mediumTermNa={savingsAndInvestmentsQuestions[0].mediumTermNa}
                                                             longTermNa={savingsAndInvestmentsQuestions[0].longTermNa}
                                                             selectedAnswer={this.state.selectedAnswerForQuestion1}
                                                             handleSelect={this.handleSelectAnswerForQuestion1}
                                                             showShortTermGoals={true}
                                                             showMediumTermGoals={true}
                                                             showLongTermGoals={true}
                                    />
                                </div>
                                <div className="next-prev-button">
                                    {this.state.question1Answered === 1 && this.showQuestion2() &&
                                    <Button primary className="section-5 next-button" onClick={(e)=>{
                                        e.preventDefault();
                                        this.slideNext();
                                    }}>Next</Button>}
                                    {this.state.question1Answered === 1 && !this.showQuestion2() &&
                                    <Button primary className="section-5 next-button" onClick={(e)=>{
                                        e.preventDefault();
                                        this.handleSectionSubmit();
                                    }}>Submit</Button>}
                                </div>
                            </div>

                            <div className={"question-item"} ref={this.question2Ref} id="question-2">
                                <div className="question short">
                                    <span>2.</span><span>{savingsAndInvestmentsQuestions[1].question}</span>
                                </div>
                                <div className="answer">
                                    <ButtonRangeWithNoOption shortTermGoalOptions={savingsAndInvestmentsQuestions[1].shortTermGoalOptions}
                                                             mediumTermGoalOptions={savingsAndInvestmentsQuestions[1].mediumTermGoalOptions}
                                                             longTermGoalOptions={savingsAndInvestmentsQuestions[1].longTermGoalOptions}
                                                             shortTermNa={savingsAndInvestmentsQuestions[1].shortTermNa}
                                                             mediumTermNa={savingsAndInvestmentsQuestions[1].mediumTermNa}
                                                             longTermNa={savingsAndInvestmentsQuestions[1].longTermNa}
                                                             selectedAnswer={this.state.selectedAnswerForQuestion2}
                                                             handleSelect={this.handleSelectAnswerForQuestion2}
                                                             showShortTermGoals={this.state.selectedAnswerForQuestion1.shortTermGoals !==savingsAndInvestmentsQuestions[0].shortTermNa.value?true:false}
                                                             showMediumTermGoals={this.state.selectedAnswerForQuestion1.mediumTermGoals !==savingsAndInvestmentsQuestions[0].mediumTermNa.value?true:false}
                                                             showLongTermGoals={this.state.selectedAnswerForQuestion1.longTermGoals !==savingsAndInvestmentsQuestions[0].longTermNa.value?true:false}
                                    />
                                </div>
                                <div className="next-prev-button">
                                    <Button primary onClick={(e)=>{
                                        e.preventDefault();
                                        this.slidePrev();
                                    }}>Back</Button>
                                    {this.state.question2Answered === 1 &&
                                    <Button primary className="section-5 next-button" onClick={(e)=>{
                                        e.preventDefault();
                                        this.handleSectionSubmit();
                                    }}>Submit</Button>}
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Grid>
        );
    }
}
export default Section5;