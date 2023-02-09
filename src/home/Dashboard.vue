<template>
  <div class="container__fluid">
    <BreadCrumbs
      title="Welcome To Dashboard"
      page="Home"
      subpages="Project Dashboard"
    />
    <div class="dashboard__wrap d-flex">
      <div class="dashboard__left">
        <div class="dashboard__banner card d-flex">
          <div class="dashboard__banner-img">
            <img src="assets/images/body_card.png" alt="body card img">
          </div>
          <div class="dashboard__banner-text">
            <h4 class="dashboard__banner-title">
              Sonia Taylor!
            </h4>
            <p>
              You have two projects to finish, you had completed <span>57%</span> from your
              monthly level, Keep going to your level
            </p>
          </div>
        </div>
        <div class="dashboard__total d-flex">
          <div
            v-for="(itemCard, index) in totalCard"
            :key="index"
            class="dashboard__box card"
          >
            <Title
              :title="itemCard.title"
              :text="itemCard.text"
            />
            <div class="dashboard__box-info d-flex">
              <div class="dashboard__box-left">
                <h4>{{ itemCard.number }}</h4>
                <p>
                  <span
                    :class="{decrease: itemCard.isDecrease}"
                  >
                    {{ itemCard.percent }}%
                  </span>
                  {{ itemCard.status }}
                </p>
              </div>
              <div class="dashboard__box-right">
                <div class="dashboard__box-icon">
                  <i :class="itemCard.icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="project__budget card">
          <Title
            title="Project Budget"
            text="The Project Budget is a tool used by project managers to estimate the total cost of a project"
          />
          <div class="project__budget-chart">
            <apexchart
              width="100%"
              height="250"
              type="area"
              :options="optionsBudget"
              :series="seriesBudget"
            />
          </div>
        </div>
        <div class="d-flex wrapper">
          <div class="today__task d-flex card">
            <div class="today__task-left">
              <Title
                title="Today tasks"
                text="UX UI & Backend Development"
              />
              <p>Project-Budget</p>
              <h3>$5,240</h3>
              <span>May 28 - June 01(2018)</span>
            </div>
            <div class="today__task-right">
              <div class="task__right-note d-flex">
                <div class="note__project d-flex">
                  <span />
                  <p>Project</p>
                </div>
                <div class="note__inprogress d-flex">
                  <span />
                  <p>Inprogress</p>
                </div>
              </div>
              <apexchart
                height="200"
                type="radialBar"
                :options="optionsTodayTask"
                :series="seriesTodayTask"
              />
            </div>
          </div>
          <div class="top__inquiries card">
            <Title
              title="Top Inquiries"
              text="project work involves a group students investigating"
            />
            <div
              v-for="(itemTop, indexTop) in topInquiries"
              :key="indexTop"
              class="d-flex"
            >
              <div class="top__inquiries-name">
                {{ itemTop.name }}
              </div>
              <progress-bar
                :options="itemTop.optionsBrand"
                :value="itemTop.valueBrand"
              />
              <div class="percent d-flex">
                <i :class="itemTop.icon" />
                {{ itemTop.percent }}%
              </div>
            </div>
          </div>
        </div>
        <div class="tasks card">
          <Title
            title="Tasks"
            text="A task is accomplished by a set deadline, and must contribute toward work-related objectives."
          />
          <div class="tasks__table">
            <div class="table__wrap">
              <div class="table__list d-flex">
                <div class="list__task-wrap">
                  <div class="tasks__title">
                    <h6>Task</h6>
                  </div>
                  <div
                    v-for="(itemTasks, indexTasks) in Tasks"
                    :key="indexTasks"
                    class="table__list-task"
                  >
                    <input
                      :id="itemTasks.option"
                      type="checkbox"
                      :name="itemTasks.option"
                      :checked="itemTasks.isCheck"
                    >
                    <label :for="itemTasks.option">{{ itemTasks.label }}</label><br>
                  </div>
                </div>
                <div class="list__team-wrap">
                  <div class="tasks__title">
                    <h6>Team</h6>
                  </div>
                  <div
                    v-for="(itemTeamTasks, indexTeamTasks) in TeamTasks"
                    :key="indexTeamTasks"
                    class="table__list-team d-flex"
                  >
                    <div class="list__team-item">
                      <img :src="itemTeamTasks.img1" alt="team img">
                    </div>
                    <div class="list__team-item">
                      <img :src="itemTeamTasks.img2" alt="team img">
                    </div>
                    <div class="list__team-item">
                      <img :src="itemTeamTasks.img3" alt="team img">
                    </div>
                    <div class="list__team-item">
                      <img :src="itemTeamTasks.img4" alt="team img">
                    </div>
                  </div>
                </div>
                <div class="task__list-open">
                  <div class="tasks__title">
                    <h6>Open Task</h6>
                  </div>
                  <p
                    v-for="(itemOpenTasks, indexOpenTasks) in OpenTasks"
                    :key="indexOpenTasks"
                  >
                    {{ itemOpenTasks.openTask }}
                  </p>
                </div>
                <div class="task__list-priority">
                  <div class="tasks__title">
                    <h6>Priority</h6>
                  </div>
                  <p
                    v-for="(itemPriority, indexPriority) in PriorityTasks"
                    :key="indexPriority"
                  >
                    {{ itemPriority.priority }}
                  </p>
                </div>
                <div class="task__list-status">
                  <div class="tasks__title">
                    <h6>Status</h6>
                  </div>
                  <p
                    v-for="(itemStatus, indexStatus) in Status"
                    :key="indexStatus"
                  >
                    {{ itemStatus.status }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard__right">
        <div class="dashboard__recent card">
          <Title
            title="Recent Transactions"
            text="Projects where development work is on completion"
          />
          <div class="dashboard__recent-transactions">
            <div
              v-for="(items, index) in recentTransactions"
              :key="index"
              class="recent__transactions-box d-flex"
            >
              <div class="transactions__box-left d-flex">
                <img :src="items.avt" alt="avatar" class="transactions__box-avatar">
                <div class="transactions__box-info">
                  <h6 class="transactions__box-name">
                    {{ items.name }}
                  </h6>
                  <p>{{ items.text }}</p>
                </div>
              </div>
              <div class="transactions__box-right">
                <h6 class="transactions__cash">
                  ${{ items.cash }}
                  <i :class="items.icon" />
                </h6>
                <p class="transactions__date">
                  {{ items.date }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="project__launch card d-flex">
          <div class="project__launch-left">
            <Title
              title="Project launch"
              text="the project is going to launch"
            />
            <p>145 days</p>
            <span>12 Monday, Oct 2020</span>
          </div>
          <div class="project__launch-right">
            <img src="assets/images/project-launch.png" alt="">
          </div>
        </div>
        <div class="going__projects card">
          <Title
            title="On Going Projects"
            text="Projects where development work is on completion"
          />
          <div
            v-for="(itemGoing, indexGoing) in goingProjects"
            :key="indexGoing"
            class="going__projects-box d-flex"
          >
            <div class="going__box-left">
              <div class="going__box-team d-flex">
                <div class="going__box-avatar">
                  <img :src="itemGoing.img1" alt="avatar">
                </div>
                <div class="going__box-avatar">
                  <img :src="itemGoing.img2" alt="avatar">
                </div>
                <div class="going__box-avatar">
                  <img :src="itemGoing.img3" alt="avatar">
                </div>
                <div class="going__box-avatar">
                  <img :src="itemGoing.img4" alt="avatar">
                </div>
                <span>Design Team</span>
              </div>
              <p>{{ itemGoing.date }}</p>
              <h6>{{ itemGoing.team }}</h6>
            </div>
            <div class="going__box-right">
              <i class="fa-solid fa-ellipsis" />
              <div class="going__box-chart">
                <apexchart
                  height="100"
                  width="60"
                  type="radialBar"
                  :options="itemGoing.optionsDesign"
                  :series="itemGoing.seriesDesign"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="website__design card">
          <div class="website__design-title d-flex">
            <Title
              title="Website design"
              text="Task completed: 7/10"
            />
            <p>Running</p>
          </div>
          <apexchart
            height="120"
            type="bar"
            :options="optionsWebsiteDesign"
            :series="seriesWebsiteDesign"
          />
          <div class="website__design-footer d-flex">
            <div class="website__design-left">
              <p>Client:<span>John Deo</span></p>
              <p>Deadline: 25 Dex 2020</p>
            </div>
            <div class="website__design-right">
              <img src="assets/images/website-design.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import BreadCrumbs from '../components/BreadCrumb.vue'
export default {
  components: {BreadCrumbs, Title},
  data () {
    return {
      recentTransactions: [
        {
          avt: 'assets/images/transactions_avt1.jpg',
          name: 'Flicker',
          text: 'App improvement',
          cash: '45.234',
          icon: 'fa-solid fa-arrow-turn-up',
          date: '12 Jan 2020'
        },
        {
          avt: 'assets/images/transactions_avt2.jpg',
          name: 'Intoxica',
          text: 'Milestone',
          cash: '23.452',
          icon: 'fa-solid fa-arrow-turn-down',
          date: '23 Jan 2020'
        },
        {
          avt: 'assets/images/transactions_avt3.jpg',
          name: 'Digiwatt',
          text: 'Sales executive',
          cash: '78.001',
          icon: 'fa-solid fa-arrow-turn-down',
          date: '4 Apr 2020'
        },
        {
          avt: 'assets/images/transactions_avt4.jpg',
          name: 'Flicker',
          text: 'Milestone2',
          cash: '37.285',
          icon: 'fa-solid fa-arrow-turn-up',
          date: '4 Apr 2020'
        },
        {
          avt: 'assets/images/transactions_avt5.jpg',
          name: 'Flicker',
          text: 'App improvement',
          cash: '25.341',
          icon: 'fa-solid fa-arrow-turn-down',
          date: '4 Apr 2020'
        },
      ],
      totalCard: [
        {
          title: 'Total revenue',
          text: 'Previous month vs this months',
          number: '$5,900.00',
          percent: '55',
          status: 'Higher',
          icon: 'fa-solid fa-chart-column'
        },
        {
          title: 'New Employees',
          text: 'Employees joined this month',
          number: '15',
          percent: '5',
          status: 'Increased',
          icon: 'fa-solid fa-user'
        },
        {
          title: 'Total Expenses',
          isDecrease: true,
          text: 'Previous month vs this months',
          number: '$8,500',
          percent: '12',
          status: 'Decrease',
          icon: 'fa-solid fa-circle-dollar',
        },
      ],
      optionsBudget: {
        chart: {
          background: '#fff'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Aug', 'Sep', 'Oct']
        },
        grid: {
          show: true,
          column: {
            opacity: 0.5,
            colors: undefined
          }
        },
        yaxis: {
          min: 0,
          max: 1050,
          tickAmount: 7,
        },
        stroke: {
          curve: 'smooth',
          dashArray: [0, 8]
        },
        colors: ['#6259ca', '#CED4DC'],
        dataLabels: {
          enabled: false
        },
      },
      seriesBudget: [
        {
          name: 'TOTAL BUDGET',
          data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210, 410]
        },
        {
          name: 'AMOUNT USED',
          data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454, 230]
        }
      ],
      optionsTodayTask: {
        colors: ['#6259ca', '#CED4DC'],
        dataLabels: {
          show: true,
        },
      },
      seriesTodayTask: [75],
      topInquiries: [
        {
          name: 'Brand identity',
          optionsBrand: {
            text: {
              hideText: true
            },
            progress: {
              color: '#6259ca',
              backgroundColor: '#CED4DC'
            },
            layout: {
              height: 6,
              progressPadding: 0,
            }
          },
          valueBrand: 80,
          icon: 'fa-solid fa-arrow-up',
          percent: '24.75'
        },
        {
          name: 'UI & UX design',
          optionsBrand: {
            text: {
              hideText: true
            },
            progress: {
              color: '#6259ca',
              backgroundColor: '#CED4DC'
            },
            layout: {
              height: 6,
              progressPadding: 0,
            }
          },
          valueBrand: 70,
          icon: 'fa-solid fa-arrow-down',
          percent: '12.34'
        },
        {
          name: 'Product design',
          optionsBrand: {
            text: {
              hideText: true
            },
            progress: {
              color: '#6259ca',
              backgroundColor: '#CED4DC'
            },
            layout: {
              height: 6,
              progressPadding: 0,
            }
          },
          valueBrand: 40,
          icon: 'fa-solid fa-arrow-up',
          percent: '12.75'
        },
      ],
      goingProjects: [
        {
          img1: 'assets/images/design-mobile1.jpg',
          img2: 'assets/images/design-mobile2.jpg',
          img3: 'assets/images/design-mobile3.jpg',
          img4: 'assets/images/design-mobile4.jpg',
          date: '25 August 2020',
          team: 'Mobile app design',
          optionsDesign: {
            colors: ['#6259ca', '#CED4DC'],
            labels: [''],
          },
          seriesDesign: [85],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '1%',
              },
            }
          }
        },
        {
          img1: 'assets/images/design-website1.jpg',
          img2: 'assets/images/design-website2.jpg',
          img3: 'assets/images/design-website3.jpg',
          img4: 'assets/images/design-website4.jpg',
          date: '12 June 2020',
          team: 'Website Redesign',
          optionsDesign: {
            colors: ['#6259ca', '#CED4DC'],
            labels: [''],
          },
          seriesDesign: [80],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '1%',
              },
            }
          }
        },
      ],
      optionsWebsiteDesign: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        dataLabels: {
          enabled: false
        },
        barDatasetSpacing: 3,
        grid: {
          show: false,
        },
        chart: {
          stacked: true,
          backgroundBarColors: 'red',
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: '16',
            columnMaxHeight: '20'
          }
        },
        colors: ['#6259ca', '#CED4DC'],
        legend: {
          show: false,
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false
          }
        }
      },
      seriesWebsiteDesign: [
        {
          name: 'Total Project',
          data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54]
        },
        {
          name: 'On Going',
          data: [66, 59, 76, 56, 58, 65, 59, 85, 23, 32]
        },
      ],
      TitleTasks: [
        {
          title: 'Task'
        },
        {
          title: 'Team'
        },
        {
          title: 'Open Task'
        },
        {
          title: 'Priority'
        },
        {
          title: 'Status'
        }
      ],
      Tasks: [
        {
          option: 'option1',
          label: 'Evaluating the design',
          isCheck: true
        },
        {
          option: 'option2',
          label: 'Generate ideas for design',
          isCheck: true
        },
        {
          option: 'option3',
          label: 'Define the problem',
        },
        {
          option: 'option4',
          label: 'Empathize with users',
        },
      ],
      TeamTasks: [
        {
          img1: 'assets/images/team1-1.jpg',
          img2: 'assets/images/team1-2.jpg',
          img3: 'assets/images/team1-3.jpg',
          img4: 'assets/images/team1-4.jpg',
        },
        {
          img1: 'assets/images/team2-1.jpg',
          img2: 'assets/images/team2-2.jpg',
          img3: 'assets/images/team2-3.jpg',
          img4: 'assets/images/team2-4.jpg',
        },
        {
          img1: 'assets/images/team3-1.jpg',
          img2: 'assets/images/team3-2.jpg',
          img3: 'assets/images/team3-3.jpg',
          img4: 'assets/images/team3-4.jpg',
        },
        {
          img1: 'assets/images/team4-1.jpg',
          img2: 'assets/images/team4-2.jpg',
          img3: 'assets/images/team4-3.jpg',
          img4: 'assets/images/team4-4.jpg',
        }
      ],
      OpenTasks: [
        {
          openTask: '37'
        },
        {
          openTask: '37'
        },
        {
          openTask: '37'
        },
        {
          openTask: '37'
        },
      ],
      PriorityTasks: [
        {
          priority: 'High',
        },
        {
          priority: 'Normal',
        },
        {
          priority: 'Low',
        },
        {
          priority: 'High',
        },
      ],
      Status: [
        {
          status: 'Completed',
        },
        {
          status: 'Pending',
        },
        {
          status: 'Completed',
        },
        {
          status: 'Rejected',
        },
      ]
    }
  },
}
</script>