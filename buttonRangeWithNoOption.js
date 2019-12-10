import React,{Component} from 'react';
import {Button, Checkbox, Grid, GridColumn, Icon, Popup, Segment, Visibility} from "semantic-ui-react";
class ButtonRangeWithNoOption extends Component{
    render() {
        return (
            <div>
                {this.props.showShortTermGoals &&
                <div className="button-range with-na">
                    <Grid verticalAlign="top">
                        <div className="goals-title">
                            Short-term savings goals
                            <Popup on='click'
                                trigger={<Icon circular name='info' className="info-popup" />}
                                content='e.g. up to 12 months'
                                size='small'
                            />
                        </div>
                        <GridColumn width={16}>
                            <div className="track"></div>
                            {this.props.shortTermGoalOptions.map((option,index)=>{
                                return(
                                    this.props.selectedAnswer.shortTermGoals === option.value ?
                                        <Button key={index}circular icon="checkmark" className="active" style={{left:option.left,color:"#FFFFFF",backgroundColor:option.color}}/>:
                                        <Button key={index} circular icon="circle" onClick={(e)=>{
                                            e.preventDefault();
                                            this.props.handleSelect("short_term",option.value,option.score);
                                        }} style={{left:option.left,color:"#A7A7A7"}}/>
                                )
                            })}
                            <div className="text-hide">
                                {this.props.shortTermGoalOptions.map((option,index)=>{
                                    return(
                                        this.props.selectedAnswer.shortTermGoals === option.value ?<span key={index} style={{left:option.left,color:option.color}}>{option.text}</span>
                                            :<span className="text-hide" style={{visibility:"hidden"}}>hi</span>

                                    )
                                })}
                            </div>
                            <div>
                                <Checkbox label='N/A. I do not have these savings goals'
                                className="checkbox-margin"
                                          checked={this.props.selectedAnswer.shortTermGoals === this.props.shortTermNa.value}
                                          onClick={(e)=>{
                                              e.preventDefault();
                                              if(this.props.selectedAnswer.shortTermGoals !== this.props.shortTermNa.value){
                                                  this.props.handleSelect("short_term",this.props.shortTermNa.value,this.props.shortTermNa.score);
                                              }
                                          }}/>
                            </div>
                        </GridColumn>
                    </Grid>
                </div>}
                {this.props.showMediumTermGoals &&
                <div className="button-range with-na">
                    <Grid verticalAlign="top">
                        <div className="goals-title">
                            Medium-term savings goals
                            <Popup on='click'
                                   trigger={<Icon circular name='info' className="info-popup" />}
                                   content='e.g. 3-5 years'
                                   size='small'
                            />
                        </div>
                        <GridColumn width={16}>
                            <div className="track"></div>
                            {this.props.mediumTermGoalOptions.map((option,index)=>{
                                return(
                                    this.props.selectedAnswer.mediumTermGoals === option.value ?
                                        <Button key={index}circular icon="checkmark" className="active" style={{left:option.left,color:"#FFFFFF",backgroundColor:option.color}}/>:
                                        <Button key={index} circular icon="circle" onClick={(e)=>{
                                            e.preventDefault();
                                            this.props.handleSelect("medium_term",option.value,option.score);
                                        }} style={{left:option.left,color:"#A7A7A7"}}/>
                                )
                            })}
                            <div className="text-hide">
                                {this.props.mediumTermGoalOptions.map((option,index)=>{
                                    return(
                                        this.props.selectedAnswer.mediumTermGoals === option.value ?
                                        
                                        <span key={index}  style={{left:option.left,color:option.color}}>{option.text}</span>
                                            :<span className="text-hide" style={{visibility:"hidden"}}>hi</span>

                                    )
                                })}
                            </div>
                            <Checkbox label='N/A. I do not have these savings goals' className="checkbox-margin"
                                      checked={this.props.selectedAnswer.mediumTermGoals === this.props.mediumTermNa.value}
                                      onClick={(e)=>{
                                          e.preventDefault();
                                          if(this.props.selectedAnswer.mediumTermGoals !== this.props.mediumTermNa.value){
                                              this.props.handleSelect("medium_term",this.props.mediumTermNa.value,this.props.mediumTermNa.score);
                                          }
                                      }}/>
                        </GridColumn>
                    </Grid>
                </div>}
                {this.props.showLongTermGoals &&
                <div className="button-range with-na">
                    <Grid verticalAlign="top">
                        <div className="goals-title">
                            Long-term savings goals
                            <Popup on='click'
                                   trigger={<Icon circular name='info' className="info-popup" />}
                                   content='e.g. 10 years +'
                                   size='small'
                            />
                        </div>
                        <GridColumn width={16}>
                            <div className="track"></div>
                            {this.props.longTermGoalOptions.map((option,index)=>{
                                return(
                                    this.props.selectedAnswer.longTermGoals === option.value ?
                                        <Button key={index}circular icon="checkmark" className="active" style={{left:option.left,color:"#FFFFFF",backgroundColor:option.color}}/>:
                                        <Button key={index} circular icon="circle" onClick={(e)=>{
                                            e.preventDefault();
                                            this.props.handleSelect("long_term",option.value,option.score);
                                        }} style={{left:option.left,color:"#A7A7A7"}}/>
                                )
                            })}
                            <div className="text-hide">
                                {this.props.longTermGoalOptions.map((option,index)=>{
                                    return(
                                        this.props.selectedAnswer.longTermGoals === option.value ?<span key={index} style={{left:option.left,color:option.color}}>{option.text}</span>
                                            :<span className="text-hide" style={{visibility:"hidden"}}>hi</span>

                                    )
                                })}
                            </div>
                            <Checkbox label='N/A. I do not have these savings goals'
                            className="checkbox-margin"
                                      checked={this.props.selectedAnswer.longTermGoals === this.props.longTermNa.value}
                                      onClick={(e)=>{
                                          e.preventDefault();
                                          if(this.props.selectedAnswer.longTermGoals !== this.props.longTermNa.value){
                                              this.props.handleSelect("long_term",this.props.longTermNa.value,this.props.longTermNa.score);
                                          }
                                      }}/>
                        </GridColumn>
                    </Grid>
                </div>
                }
            </div>
        );
    }
}
export default ButtonRangeWithNoOption;